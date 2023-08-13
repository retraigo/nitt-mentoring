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
    const user = await client.prisma.mentors.findFirst({
      where: { user_id: Number(jwtPayload.id) },
    });
    if (user) {
      return {
        username: user.user_name,
        level: user.user_level,
      };
    } else {
      // This shouldn't happen
      throw createError({
        statusCode: 404,
      });
    }
  }
});
