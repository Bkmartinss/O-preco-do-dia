const express = require('express');
const sequelize = require('./config/database');
const categoryRoutes = require('./routes/categoryRoutes');
const locationRoutes = require('./routes/locationRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require("./routes/userRoutes")
const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const swaggerDocument = JSON.parse(fs.readFileSync(path.join(__dirname, 'swagger.json'), 'utf8'));
const { createProxyMiddleware } = require('http-proxy-middleware')

// const corsOptions = { 
//     origin: 'http://localhost:8082', // Replace with your frontend origin 
//     credentials: true, // Permitir credenciais (cookies, autenticação HTTP)
// };
app.use('/api', createProxyMiddleware({ 
    target: 'https://dummyjson.com', 
    changeOrigin: true, 
    pathRewrite: { 
        '^/api': '', // Remova o prefixo /api ao encaminhar para o destino
    }, 
    onProxyReq: (proxyReq, req, res) => { 
        proxyReq.setHeader('Access-Control-Allow-Origin', 'http://localhost:8082'); 
        proxyReq.setHeader('Access-Control-Allow-Credentials', 'true'); 
    }, 
}));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(bodyParser.json());

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

app.use(userRoutes);
app.use(categoryRoutes);
app.use(locationRoutes);
app.use(productRoutes);

sequelize.sync({ force:false}).then(() => {
    console.log('Database & tables created!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
