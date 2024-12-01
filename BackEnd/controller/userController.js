const bcrypt = require("bcrypt");
const userModel = require("../models/User.js");

const routerAuthenticated = async (req, res) => { //define uma rota autenticada
    res.status(200).json({
        statusCode: 200, //Requisição bem-sucedida
        message: "Rota autenticada"
    });
};

const createUser = async (req, res) => { //criar usuário
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    req.body.password = hashedPassword; //muda a senha pelo hash antes de ir p o bd

    try {
        console.log(req.body);
        // cria um documento do modelo como as requisições do usuário
        const newUser = new userModel({ email: req.body.email, password: req.body.password, fullName: req.body.fullName, userName: req.body.userName });
        //salva no bd
        const userSaved = await newUser.save();

        res.status(201).json({
            statusCode: 201, //Recurso criado com sucesso
            message: "Usuário criado com sucesso!",
            data: {
                userSaved
            }
        });

    } catch (error) {
        res.status(500).json({
            statusCode: 500, //Erro interno do servidor
            message: error.message
        });
    }
};

module.exports = {
    routerAuthenticated,
    createUser
};
