const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Post = new Schema({
    message: {
        type: String
    },
   name: {
        type: String
    },
    place: {
        type: String
    },
    country: {
        type: String
    },
    date: {
        type: Date,
        default:Date.now
    },
    approval_status:{
        type:Boolean,
        default:true
    }
});

module.exports = mongoose.model('Post', Post);