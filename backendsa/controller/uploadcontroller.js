var uploadmodel = require('../model/uploadmodel');
var loginModel = require('../model/login');

exports.upload_index = async (req, res) => {

    var data = await uploadmodel.create(req.body);

    res.status(200).json({
        status: 'success',
        data
    })
};

exports.upload_get_data = async (req, res) => {

    var data = await uploadmodel.find().populate("user_id");

    res.status(200).json({
        status: 'success',
        data
    })
};