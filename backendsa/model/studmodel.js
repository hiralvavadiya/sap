var mongoose = require('mongoose');


var studentSchema= new mongoose.Schema({
    application:{
        type:String
    },
    deadline:{
        type:String
    },
    status:{
        type:String,
        default:"Not applied"
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'register',
    }
})

module.exports = mongoose.model('student',studentSchema);