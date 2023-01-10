const { PrismaClient } = require("@prisma/client");
const { default: axios } = require("axios");

const prisma = new PrismaClient();
const users = prisma.users;

const get = async (req, res) => {
  try {
    users.findMany({}).then((result) => {
      res.json(result);
    });
  } catch (err) {
    res.json(err);
  }
};

const getOne = async (req, res) => {
  try {
    users.findFirst({where:{email:req.params.email}}).then((result) => {
      res.json(result);
    });
  } catch (err) {
    res.json(err);
  }
};
const getfriends = async (req, res) => {
  const friends=req.body.contactList
  
  try {
    var i=0
   while (i<friends.length) {
  
   }
   
 
  } catch (err) {
    res.json(err);
  }
};


const add = async (req,res)=>{
  try{
    users.create({

      data: {
      userName: req.body.userName,
      password: req.body.password,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      image:req.body.image,
      ratings:req.body.ratings,
      pendingRequests:req.body.pendingRequests,
      location:req.body.location,
      contactList:req.body.contactList,
      verified:false,
    }
   
  }).then(result=> res.json(result))
  } catch (err){
    res.json(err)
  }
}

const verify = (req,res)=>{
   
   users.update({
      where: {user_id:+req.params.id },
      data: { verified:req.body.verified},
    }).then((result) => {
      res.json(result);
    })
   .catch ((err)=> {
    res.json(err)
  })
}
const deleteFriend = async (req, res) => {
  try {
    const result = await users.delete({
      where: {
        user_id: +req.params.id
      },
    });
    res.json(result);
  } catch (err) {
    res.json(err);
  }
};

const updateFriend = async (req, res) => {
  try {
    const result = await users.update({
      where: { user_id: +req.params.id },
      data: {
      
        contactList: req.body.contactList
        
      },
    });
    res.json(result);
  } catch (err) {
    res.json(err);
  }
};





module.exports = { get, add ,verify,getOne,getfriends,deleteFriend,updateFriend};
