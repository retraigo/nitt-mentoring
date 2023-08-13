import { compare } from "bcrypt";
import { Client } from "../../utils/database.js";

const client = new Client();
type UserCreds = {
  username: string;
  password: string;
};

export default defineEventHandler(async (e) => {
  const body = await readBody<UserCreds>(e);
  if (!body.username || !body.password) {
    throw createError({
      statusCode: 400,
      statusText: "Invalid Form Body",
    });
  }
  const user = await client.prisma.mentors.findFirst({
    where: { user_name: body.username },
  });

  if (!user) {
    throw createError({
      statusCode: 404,
      statusText: "User not found",
    });
  }

  const equal = await compare(body.password, user.password);
  if (equal) {
    const token = await createJwt(`${user.user_id}`, user.user_level);
    return { message: "Successfully logged in.", token };
  } else {
    throw createError({
      statusCode: 401,
    });
  }
});
