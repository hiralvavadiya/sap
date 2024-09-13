var note = require('../model/notemodel');
var loginModel = require('../model/login');

exports.note_index = async (req,res) => {
    var data = await note.create(req.body);

    res.status(200).json({
        status:'success',
        data
    })
};

exports.note_get_data = async (req,res) => {
    var data = await note.find().populate("user_id");
    res.status(200).json({
        status:'data get',
        data
    })
};

exports.note_del = async (req,res) => {
    var id = req.params.id;
    var data = await note.findByIdAndDelete(id);
    res.status(200).json({
        status:'data delete',
        data
    })
}