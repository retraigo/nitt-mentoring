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
    const meetingId = getRouterParam(e, "meetingId");
    const meeting = await client.prisma.meetings.findFirst({
      where: { id: Number(meetingId) },
    });
    if (meeting) {
      if (
        Number(jwtPayload.level) < 2 &&
        meeting.mentor_id !== Number(jwtPayload.id)
      ) {
        throw createError({
          statusCode: 401,
          statusText: "You do not have permission.",
        });
      }
      const mentee = await client.prisma.mentees.findFirst({
        where: { regno: meeting.mentee_id },
      });
      return {
        id: meeting.id,
        date: meeting.date,
        discussion: meeting.discussion,
        mentee: {
          regno: mentee?.regno || "",
          name: mentee?.name || "",
          year: mentee?.year || -1,
          section: mentee?.section || "",
          batch: mentee?.batch || "",
          department: mentee?.department || "",
          mentor: mentee?.mentor_id || 0,
        },
        mentor: meeting.mentor_id,
      };
    } else {
      throw createError({
        statusCode: 404,
      });
    }
  }
});
