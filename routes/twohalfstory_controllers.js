let Post= require('../models/twohalfstory_model');
const express =require('express')
const post_routes = express.Router();



post_routes.route('/approved/:id').post(function(req, res) {
    Post.findById(req.params.id, function(err, profile) {
        if (!profile)
            res.status(404).send('data is not found');
        else
           
        profile.approval_status= false,
       


            profile.save().then(prfile=> {
                res.json('profile updated');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});


post_routes.route('/dissaprove/:id').post(function(req, res) {
    Post.findById(req.params.id, function(err, profile) {
        if (!profile)
            res.status(404).send('data is not found');
        else
           
        profile.approval_status= true,
       


            profile.save().then(prfile=> {
                res.json('profile updated');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});


post_routes.route('/edit/:id').post(function(req, res) {
    Post.findById(req.params.id, function(err, profile) {
        if (!profile)
            res.status(404).send('data is not found');
        else
           
        profile.name= req.body.name,
        profile.message=req.body.message,
        profile.place=req.body.place
        // profile.country=req.body.country
       


            profile.save().then(prfile=> {
                res.json('profile updated');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

post_routes.route('/').get(function(req, res) {
   Post.find(function(err, info) {
        if (err) {
            console.log(err);
        } else {
            res.json(info);
        }
    });
});



// post_routes.route('/').get(function(req, res) {
    
//     Post.find(function(err, info) {
        
//          if (err) {
//              console.log(err);
//          } else {
//              res.json(info);
//          }
//      });
//  });





post_routes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Post.findById(id, function(err, info) {
        res.json(info);
    });
});



post_routes.route('/add').post(function(req, res) {
    let info = new Post(req.body);
    info.save()
        .then(info => {
            res.status(200).json({'info': 'contact information added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new contact information failed');
        });
});



post_routes.delete('/:id', (req, res, next)=>{
   Post.findOneAndDelete({"_id":req.params.id})
    .then(data=>res.json(data))
    .catch(next)
})







module.exports=post_routes