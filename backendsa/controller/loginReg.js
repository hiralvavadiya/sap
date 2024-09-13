var loginModel = require('../model/login')
const bcrypt = require('bcrypt');
const storage = require('node-persist');
var jwt = require('jsonwebtoken');  
const login = require('../model/login');
storage.init();

exports.register_index = async (req,res) => {
    var b_pass = await bcrypt.hash(req.body.password,10);
    req.body.password = b_pass;

    var data = await loginModel.create(req.body);

    res.status(200).json({
        status: 'success',
        data
    }) 
};

exports.register_get_data = async (req,res) => {
    var data = await loginModel.find();
    res.status(200).json({
        status: 'data get',
        data
    })
};

exports.logout = async (req,res) => {
    await storage.clear();
    res.status(200).json({
        status:'logout'
    })
};

exports.login = async (req,res) => {

    var data = await login.find({"email":req.body.email});

    var login_status = await storage.getItem('login_user')

    if(login_status==undefined){
        if(data.length==1){
            bcrypt.compare(req.body.password,data[0].password, async function(err,result){
                if(result==true){
                    await storage.setItem('login_user',data[0].id)
                    var token = jwt.sign({id:data[0].id}, 'secretkey');
                    res.status(200).json({
                        status:'Login success',
                        token
                    })
                }
                else{
                    res.status(200).json({
                        status:'Check your email and password'
                    })
                }
            })
        }
        else{
            res.status(200).json({
                status:'Check your email and password'
            })
        }
    }
    else{
        res.status(200).json({
            status:'user is already login'
        })
    }
};