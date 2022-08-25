const User = require('../model/user.model')
const axios = require('axios')
exports.details = async (req,res) => {
    User.find().then((user,index)=>{
            res.send(user)
    })
    .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving users.",
        });
      });
}
// first 
exports.detailId = async (req,res) => {
    const id = req.params.id
   const udata = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
//    console.log(udata);
   const dobj = udata.data;
    res.send({zipcode:dobj.address.zipcode, companyname:dobj.company.name, number:dobj.phone})

};
   

exports.home = (req,res) => {
    res.json({
        message:
          "Welcome -> for user details goto-> http://localhost:3001/users",
      });
}

exports.adduser = async (req,res) => {
    const user = new User({
        id:req.body.id,
        name:req.body.name,
        username:req.body.username,
        email:req.body.email,
        address:{
            street:req.body.address.street,
            suite:req.body.address.suite,
            city:req.body.address.city,
            zipcode:req.body.address.zipcode,
            geo:{
                lat:req.body.address.geo.lat,
                lng:req.body.address.geo.lng
            }
        },
        phone:req.body.phone,
        website:req.body.website,
        company:{
            name:req.body.company.name,
            catchPhrase:req.body.company.catchPhrase,
            bs:req.body.company.bs
        }
    })

    user.save().then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        res.status(500).send({
            message:err.message||"Some error occured while generating keys"
        })
    })
}