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
    const users = await client.prisma.students.findMany({
      where: { mentor_id: Number(jwtPayload.id) },
    });
    if (users) {
      return users.map((user) => client.manager.createPartialStudent(user));
    } else {
      throw createError({
        statusCode: 404,
        statusText: "No mentees found"
      });
    }
  }
});
