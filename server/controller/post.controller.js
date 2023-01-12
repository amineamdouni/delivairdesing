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
  const getOne = async (req, res) => {
    try {
      posts.findFirst({where:{departCountry:req.params.departCountry}}).then((result) => {
        res.json(result);
      });
    } catch (err) {
      res.json(err);
    }
  };


const add = async(req,res)=>{
  try{
    posts.create({
      data:{
        type:req.body.type,
        departCountry:req.body.departCountry,
        departTime:req.body.departTime,
        arriveCountry:req.body.arriveCountry,
        arriveTime:req.body.arriveTime,
        content:req.body.content,
        paymentWays:req.body.paymentWays,
        acceptedItems:req.body.acceptedItems,
        weight:req.body.weight,
        postTime:req.body.postTime,
        poster_id:req.body.poster_id,
        flight_id:req.body.flight_id
      }
    }).then(result=>res.json(result))
  } catch(err){
    res.json(err)
  }
}
const deletepost = async (req, res) => {
  try {
    const { post_id } = req.params;
    const deletedPost = await prisma.posts.delete({
      where: {
        post_id: Number(post_id)
      }
    });
    res.json(deletedPost);
  } catch (err) {
    res.json(err);
  }
};



module.exports = {get,add,getOne,deletepost};
