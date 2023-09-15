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
    if (Number(jwtPayload.level) < 2) {
      throw createError({
        statusCode: 401,
        statusText: "You do not have permission.",
      });
    }
    const users = await client.prisma.mentees.findMany();
    if (users) {
      return users.map((user) => ({
        regno: user.regno,
        name: user.name,
        year: user.year,
        section: user.section,
        batch: user.batch,
        department: user.department,
        mentor_id: user.mentor_id,
      }));
    } else {
      // This def won't happen
      throw createError({
        statusCode: 404,
      });
    }
  }
});
