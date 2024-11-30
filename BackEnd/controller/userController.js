const bcrypt = require("bcrypt");
const userModel = require("../models/User.js");

const routerAuthenticated = async (req, res) => {
    res.status(200).json({
        statusCode: 200,
        message: "Rota autenticada"
    });
};

const createUser = async (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    req.body.password = hashedPassword;

    try {
        console.log(req.body);

        const newUser = new userModel({ email: req.body.email, password: req.body.password, fullName: req.body.fullName, userName: req.body.userName });

        const userSaved = await newUser.save();

        res.status(201).json({
            statusCode: 201,
            message: "Usuário criado com sucesso!",
            data: {
                userSaved
            }
        });

    } catch (error) {
        res.status(500).json({
            statusCode: 500,
            message: error.message
        });
    }
};

module.exports = {
    routerAuthenticated,
    createUser
};
