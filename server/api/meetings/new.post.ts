import { Client } from "../../utils/database.js";
import type { Meeting } from "../../../types/types.js";

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
    const body = await readBody<Meeting>(e);
    if (
      ["date", "discussion", "mentee_id"].some((k) => !Object.hasOwn(body, k))
    ) {
      throw createError({
        statusCode: 400,
        statusText: "Invalid Form Body",
      });
    }
    try {
      await client.prisma.meetings.create({
        data: { date: new Date(body.date), discussion: body.discussion, mentor_id: Number(jwtPayload.id), mentee_id: body.mentee_id },
      });
      return { message: "Meeting recorded successfully!" };
    } catch (err) {
      console.log(err)
      throw createError({
        statusCode: 400,
        statusText: "Invalid Form Body",
      });
    }
  }
});
