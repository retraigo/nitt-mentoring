import { Client } from "../../utils/database.js";

const client = new Client();
export default defineEventHandler(async (e) => {
  const auth = getHeader(e, "Authorization");
  if (!auth || !auth.startsWith("Bearer ")) {
    // Not a valid auth token
    throw createError({
      statusCode: 401,
      statusText: "Not logged in.",
    });
  } else {
    const token = auth.slice(7);
    const jwtPayload = await verifyJwt(token);
    if (!jwtPayload || (Date.now() / 1000) > jwtPayload.exp) {
      throw createError({
        statusCode: 401,
        statusText: "Session expired. Please login again.",
      });
    }
    const regno = getRouterParam(e, "regno");
    if (
      Number(jwtPayload.level) < 2
    ) {
      throw createError({
        statusCode: 401,
        statusText: "You do not have permission.",
      });
    }
    const body = await readBody<{ mentor_id: number }>(e);
    const mentor = await client.prisma.mentors.findFirst({
      where: { user_id: body.mentor_id },
    });
    if (mentor || body.mentor_id === -1) {
      await client.prisma.mentees.update({
        where: { regno: regno },
        data: { mentor_id: body.mentor_id === -1 ? null : body.mentor_id },
      });
      return {
        message: "Successfully assigned mentor.",
      };
    } else {
      throw createError({
        statusCode: 404,
      });
    }
  }
});
