import { hash } from "bcrypt";
import { Client } from "../../utils/database.js";

const client = new Client();

type UserCreds = {
  username: string;
  password: string;
};

export default defineEventHandler(async (e) => {
  const body = await readBody<UserCreds>(e);
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
    if (Number(jwtPayload.level) < 3) {
      throw createError({
        statusCode: 401,
        statusText: "You do not have permission.",
      });
    }
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
      const user = await client.prisma.mentors.update({
        where: {
          user_name: body.username,
        },
        data: {
          password: encryptedPass,
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
  }
});