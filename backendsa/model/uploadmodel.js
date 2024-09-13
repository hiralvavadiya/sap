var mongoose = require('mongoose');


var uploadSchema= new mongoose.Schema({
    name:{
        type:String
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'register',
    }
})

module.exports = mongoose.model('upload',uploadSchema);