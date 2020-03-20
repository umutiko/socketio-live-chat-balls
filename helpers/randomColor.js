const colors = ['blue', 'green', 'red', 'pink', 'purple'];

const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
};

module.exports = getRandomColor;