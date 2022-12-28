const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const reviews = prisma.reviews;
module.exports = {};
