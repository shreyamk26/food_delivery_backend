const orderService = require('../services/orderService');

const placeOrder = (req, res) => {
    const orderData = req.body;
    const order = orderService.placeOrder(orderData);
    
    if (order.error) {
        return res.status(400).json(order.error);
    }
    
    res.status(201).json({ message: 'Order placed successfully!', order });
};

const getOrder = (req, res) => {
    const orderId = req.params.id;
    const order = orderService.getOrder(orderId);
    
    if (!order) {
        return res.status(404).json({ error: 'Order not found' });
    }
    
    res.status(200).json(order);
};

module.exports = {
    placeOrder,
    getOrder
};
