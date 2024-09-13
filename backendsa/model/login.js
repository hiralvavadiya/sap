var mongoose = require('mongoose');


var regSchema = new mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    },
    name:{
        type:String
    },
    address:{
        type:String
    },
    age:{
        type:Number
    },
    campus:{
        type:String
    },
    course:{
        type:String
    },
    phone:{
        type:Number
    }
})

module.exports = mongoose.model('register',regSchema);