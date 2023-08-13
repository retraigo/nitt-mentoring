import { hash } from "bcrypt";
import { Client } from "../../utils/database.js";

const client = new Client();

type UserCreds = {
  username: string;
  password: string;
};

export default defineEventHandler(async (e) => {
  const body = await readBody<UserCreds>(e);
  if (
    !body.username || !body.password
  ) {
    throw createError({
      statusCode: 400,
      statusText: "Invalid Form Body",
    });
  }
  const encryptedPass = await hash(
    body.password,
    Number(process.env.BCRYPT_SALT),
  );
  try {
    await client.prisma.mentors.create({
      data: {
        user_name: body.username,
        password: encryptedPass,
        user_level: 1,
      },
    });
    return { message: "Account created successfully!" };
  } catch (err) {
    if (err instanceof Error) {
      if (err.name === "PrismaClientKnownRequestError") {
        // @ts-ignore ik
        if (err.code === "P2002") {
          // @ts-ignore ik
          const field = err.meta.target; //err.message.match(/\(`(\w+)`\)/);
          throw createError({
            statusCode: 400,
            statusText: `An account already exist with the provided ${
              field[0].split("_").join(" ")
            }`,
          });
        }
      }
    }
    throw createError({
      statusCode: 400,
      statusText: "Invalid Form Body",
    });
  }
});
