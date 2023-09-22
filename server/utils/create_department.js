import { PrismaClient } from '@prisma/client'

const client = new PrismaClient();

const args = process.argv.slice(2)

const body = {
  dept_id: args[0],
  dept_name: args[1],
}
const dept = await client.department.create({
  data: { id: body.dept_id, name: body.dept_name },
});
console.log({ message: "Department created successfully!" });
