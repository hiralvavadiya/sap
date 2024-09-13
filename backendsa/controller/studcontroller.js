var studmodel = require('../model/studmodel');
var loginModel = require('../model/login');

exports.app_index = async (req, res) => {

    var data = await studmodel.create(req.body);

    res.status(200).json({
        status: 'success',
        data
    })
};

exports.app_get_data = async (req, res) => {

    var data = await studmodel.find().populate("user_id");

    res.status(200).json({
        status: 'get data',
        data
    })
};