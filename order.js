// In-memory storage for orders
let orders = [];

const addOrder = (order) => {
    orders.push(order);
};

const getOrder = (id) => {
    return orders.find(order => order.id === id);
};

module.exports = {
    addOrder,
    getOrder
};
