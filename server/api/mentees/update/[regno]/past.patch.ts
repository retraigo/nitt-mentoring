import { Client } from "../../../../utils/database.js";

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
      Number(jwtPayload.level) < 1
    ) {
      throw createError({
        statusCode: 401,
        statusText: "You do not have permission.",
      });
    }
    const currentUser = await client.prisma.faculty.findFirst({
      where: { user_id: Number(jwtPayload.id) },
    });
    if (!currentUser) {
      throw createError({
        statusCode: 404,
        statusText: "You do not exist.",
      });
    }
    const body = await readBody<
      {
        past : {
            sslc: {
                institution: string ,
                board_of_study:  string,
                year_of_study: string ,
                percentage: string ,
            },
            hsc: {
                institution: string ,
                board_of_study:  string ,
                year_of_study: string ,
                percentage: string ,
            },
            jee: {
                rank : number 
                score :number 
            }
        }
     }     
    >(e);
    await client.prisma.students.update({
      where: { register_no: regno },
      data: {
       
                sslc_institution: body?.past.sslc.institution,
                sslc_board: body?.past.sslc.board_of_study,
                sslc_years: body?.past.sslc.year_of_study,
                sslc_percentage: body?.past.sslc.percentage,
     
                hsc_institution: body?.past.hsc.institution,
                hsc_board:  body?.past.hsc.board_of_study,
                hsc_years: body?.past.hsc.year_of_study,
                hsc_percentage: body?.past.hsc.percentage,

                jee_score : body?.past.jee.score,
                jee_rank : body?.past.jee.rank,
      },
    });
    return {
      message: "Successfully changed Academic Qualifications",
    };
  }
});
