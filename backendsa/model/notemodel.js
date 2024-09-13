var mongoose = require('mongoose');


var noteSchema = new mongoose.Schema({
    note:{
        type:String
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'register',
    }
})

module.exports = mongoose.model('note',noteSchema);