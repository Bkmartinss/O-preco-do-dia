const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/User");

const login = async (req, res) => {
    try {
        const user = await userModel.findOne({ where: { userName: req.body.userName } });
        console.log("OI 1")

        if (!user) {
            console.log("OI ENTREI 2")
            return res.status(401).json({
                statusCode: 401,
                message: "Usuário não encontrado",
            });
        }

        const validadePassword = bcrypt.compareSync(req.body.password, user.password);
        console.log("VALIDATE")
        if (!validadePassword) {
            console.log("Entrei nao autorizado")
            return res.status(401).json({
                statusCode: 401,
                message: "Não autorizado",
            });
        }

        const token = jwt.sign({ userName: user.userName }, process.env.SECRET);
        console.log("token " + token);
        res.status(200).json({
            statusCode: 200,
            message: "Login realizado com sucesso",
            data: {
                token: token,
            },
        });
        
    console.log("Ress final")
    } catch (error) {
        console.error(error);
        res.status(500).json({
            statusCode: 500,
            message: error.message,
        });
    }
};

const verifyToken = async (req, res, next) => {
    const tokenHeader = req.headers["authorization"];
    
    //const token = tokenHeader && tokenHeader.split(" ")[1]; 
    
    if (!tokenHeader) {
        return res.status(401).json({
            statusCode: 401,
            message: "Token invalido 1!",
        });
    }
    try {
        jwt.verify(tokenHeader, process.env.SECRET);
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({
            statusCode: 500,
            message: "Token invalido 2!",
        });
    }
};

module.exports = {
    login,
    verifyToken,
};
