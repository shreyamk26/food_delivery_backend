const menuService = require('../services/menuService');

const addMenuItem = (req, res) => {
    const menuItem = req.body;
    const validationError = menuService.validateMenuItem(menuItem);
    
    if (validationError) {
        return res.status(400).json({ error: validationError });
    }
    
    menuService.addMenuItem(menuItem);
    res.status(201).json({ message: 'Menu item added successfully!' });
};

const getMenu = (req, res) => {
    const menu = menuService.getMenu();
    res.status(200).json(menu);
};

module.exports = {
    addMenuItem,
    getMenu
};
