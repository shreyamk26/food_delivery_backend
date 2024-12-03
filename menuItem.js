
let menuItems = [];

const addMenuItem = (item) => {
    menuItems.push(item);
};

const getMenu = () => {
    return menuItems;
};

module.exports = {
    addMenuItem,
    getMenu
};
