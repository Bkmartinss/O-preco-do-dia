const bcrypt = require("bcrypt"); //bcrypt para hashing e validação de senhas
const jwt = require("jsonwebtoken"); //criação e validação de tokens JWT
const userModel = require("../models/User");

const login = async (req, res) => { //autenticação de login
    try {
        const user = await userModel.findOne({ where: { userName: req.body.userName } });
        //no bd de tem o usuário
        console.log("OI 1")

        if (!user) { //se usuário não encontrado
            console.log("OI ENTREI 2")
            return res.status(401).json({
                statusCode: 401, 
                message: "Usuário não encontrado",
            });
        }

        const validadePassword = bcrypt.compareSync(req.body.password, user.password);
        //compara no bd se a senha com o hash existe
        console.log("VALIDATE")
        if (!validadePassword) { //se senha não encontrada
            console.log("Entrei nao autorizado")
            return res.status(401).json({
                statusCode: 401,
                message: "Não autorizado",
            });
        }
        //cria o token JWT com usuário e senha de forma secreta, em variáveis de ambiente
        const token = jwt.sign(
            { userName: user.userName },
            process.env.SECRET,
            { expiresIn: '1h' } // Token expira em 1 hora
        );
        console.log("token " + token);
        res.status(200).json({ 
            statusCode: 200,
            message: "Login realizado com sucesso",
            token: token //token gerado
            
        });
        
    console.log("Ress final")
    } catch (error) { //se erro
        console.error(error);
        res.status(500).json({
            statusCode: 500,
            message: error.message,
        });
    }
};

const verifyToken = async (req, res, next) => { //verificação de tem token JWT
    const tokenHeader = req.headers["Authorization"];
    
    const token = tokenHeader && tokenHeader.split(" ")[1]; 
    
    if (!tokenHeader) { // se token não encontrado
        return res.status(401).json({
            statusCode: 401,
            message: "Token invalido 1!",
        });
    }
    try {
        jwt.verify(token, process.env.SECRET);
        next(); //token seja válido
    } catch (error) {
        console.error(error);
        res.status(500).json({
            statusCode: 500,
            message: "Token invalido 2!",
        });
    }
};
//exporta as funções `login` e `verifyToken` para serem usadas
module.exports = {
    login,
    verifyToken,
};
