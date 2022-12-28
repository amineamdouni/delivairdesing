const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const users=prisma.users
const get = async (req, res) => {

try {
  users.findMany({}).then((result) => {
    res.json(result);
  });
} catch (err) {
  res.json(err);
}
};
module.exports = { get };
