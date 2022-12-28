const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const products = prisma.products;
module.exports = {};
