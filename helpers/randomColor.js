const colors = ['blue', 'green', 'red'];

const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
};

module.exports = getRandomColor;