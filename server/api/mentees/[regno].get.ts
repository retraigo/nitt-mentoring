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
    const mentee = await client.prisma.mentees.findFirst({
      where: { regno: regno },
    });
    if (mentee) {
      if (
        Number(jwtPayload.level) < 2 &&
        mentee.mentor_id !== Number(jwtPayload.id)
      ) {
        throw createError({
          statusCode: 401,
          statusText: "You do not have permission.",
        });
      }
      const meetings = await client.prisma.meetings.findMany({
        where: { mentee },
      });
      const mentor = mentee.mentor_id
        ? await client.prisma.mentors.findFirst({
          where: { user_id: mentee.mentor_id },
        })
        : null;
      return {
        regno: mentee.regno,
        name: mentee.name,
        year: mentee.year,
        section: mentee.section,
        batch: mentee.batch,
        department: mentee.department,
        mentor_id: mentee.mentor_id,
        mentor: mentor ? { username: mentor.user_name, id: mentor.user_id } : null,
        meetings: meetings,
      };
    } else {
      throw createError({
        statusCode: 404,
      });
    }
  }
});
