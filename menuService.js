const menuItemModel = require('../models/menuItem');

const validateMenuItem = (menuItem) => {
    const validCategories = ['Pizza', 'Pasta', 'Burger', 'Salad'];
    
    if (menuItem.price <= 0) {
        return "Price must be positive.";
    }
    
    if (!validCategories.includes(menuItem.category)) {
        return "Category must be valid.";
    }
    
    return null; // Valid
};

const addMenuItem = (menuItem) => {
    menuItemModel.addMenuItem(menuItem);
};

const getMenu = () => {
    return menuItemModel.getMenu();
};

module.exports = {
    validateMenuItem,
    addMenuItem,
    getMenu
};
