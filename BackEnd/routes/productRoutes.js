const express = require('express');
const multer = require('multer');
const jwt = require('jsonwebtoken'); // Make sure to import jwt
const router = express.Router();
const { Op } = require('sequelize');
const sequelize = require('../config/database');
const Product = require('../models/Product');
const Category = require('../models/Category');
const Location = require('../models/Location');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/imagem-exemplo.jpg');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + file.originalname);
    }
});

const upload = multer({ storage });

// const authenticateToken = (req, res, next) => {
//     const authHeader = req.headers['authorization']; // Use lowercase 'authorization'
//     const token = authHeader && authHeader.split(' ')[1];
    
//     console.log("back-end: " + token + " authHeader: " + authHeader);
   
//     if (token == null) return res.sendStatus(401);

//     jwt.verify(token, process.env.SECRET, (err, user) => {
//         if (err) return res.sendStatus(403);
//         req.user = user;
//         next();
//     });
// };

router.get('/products', async (req, res) => {
    try {
        const products = await Product.findAll({
            include: [
                { model: Category, attributes: ['nome'] }, // Inclui apenas o campo 'nome' da categoria
                { model: Location, attributes: ['nome'] }  // Inclui apenas o campo 'nome' do local
            ]
        });
        res.json(products);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.post('/products', upload.single('image'), async (req, res) => {
    try {
        console.log("locations e categoria ids: "+ req.body.LocationId + " " + req.body.CategoryId)
        const product = await Product.create({
            nome: req.body.nome,
            preco: req.body.preco,
            descricao: req.body.descricao,
            image: "../uploads/imagem-exemplo.jpg",
            usuario: 'bruna', // Use the user from the token
            CategoryId: req.body.CategoryId,
            LocationId: req.body.LocationId
        });
        res.status(201).json({
            statusCode: 201,
            message: "Produto cadastrado com sucesso",
        });
    } catch (err) {
        console.error('Error creating product:', err);
        res.status(400).json({ error: err.message });
    }
});

router.get('/products/:search', async (req, res) => {
    try {
        const products = await Product.findAll({
            where: {
                [Op.or]: [
                    { nome: { [Op.like]: `%${req.params.search}%` } },
                    { descricao: { [Op.like]: `%${req.params.search}%` } }
                ]
                
            },
            include: [
                { model: Category, attributes: ['nome'] },
                { model: Location, attributes: ['nome'] }
            ]
        });
        res.json(products);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
