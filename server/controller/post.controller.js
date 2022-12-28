const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const posts = prisma.posts;
const get=async (req, res) => {
  try {
    posts.findMany({}).then((result) => {
      res.json(result);
    });
  } catch (err) {
    res.json(err);
  }}
module.exports = {get};
