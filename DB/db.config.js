// db.js in the src/db directory
import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();

module.exports = prisma;
