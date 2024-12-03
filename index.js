const express = require('express');
const bodyParser = require('body-parser');
const cron = require('node-cron');
const menuRoutes = require('./src/routes/menuRoutes');
const orderRoutes = require('./src/routes/orderRoutes');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

app.use('/menu', menuRoutes);
app.use('/orders', orderRoutes);


cron.schedule('*/10 * * * * *', () => {
    console.log('Automating Order Status Update...');
    updateOrderStatus();
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const updateOrderStatus = () => {
 
    console.log("Order status updated");
};
