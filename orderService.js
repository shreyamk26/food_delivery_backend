const orderModel = require('../models/order');
const menuModel = require('../models/menuItem');

const placeOrder = (orderData) => {
    const { items } = orderData;

    // Validate if each item exists in the menu
    const invalidItems = items.filter(item => !menuModel.getMenu().find(menuItem => menuItem.name === item.name));
    
    if (invalidItems.length > 0) {
        return { error: "Invalid menu items in the order" };
    }
    
    const order = {
        id: Date.now(),
        items: items,
        status: 'Preparing',
        placedAt: new Date()
    };
    
    orderModel.addOrder(order);
    
    return order;
};

const getOrder = (orderId) => {
    return orderModel.getOrder(orderId);
};

module.exports = {
    placeOrder,
    getOrder
};
