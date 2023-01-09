const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const products = prisma.products;

const getAll = async (req, res) => {
  try {
    products.findMany({}).then((result) => {
      res.json(result);
    });
  } catch (err) {
    res.json(err);
  }
};
const getbyShipper = async (req, res) => {
  try {
    products.findMany({ where:{
      shipper_id:1*req.params.id
    }}).then((result) => {
      res.json(result);
    });
  } catch (err) {
    res.json(err);
  }
};const getbysender = async (req, res) => {
  try {
    products
      .findMany({
        where: {
          receiver_id: 1 * req.params.id,
        },
      })
      .then((result) => {
        res.json(result);
      });
  } catch (err) {
    res.json(err);
  }
};

const addProduct = async (req, res) => {console.log(req.body);
  try {
    products
      .create({
        data: {
          shipper_id: req.body.shipper,
          receiver_id: req.body.reciver,
          status: "intitial",
          weight: req.body.weight,
          productName: req.body.productName,
          flightNumber: req.body.flightNumber,
        },
      })
      .then((result) => res.json(result));
  } catch (err) {
    res.json(err);
  }
};

module.exports = { getAll, addProduct, getbyShipper };
