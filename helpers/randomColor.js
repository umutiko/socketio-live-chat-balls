const colors = ['blue', 'green', 'yellow', 'red', 'orange'];

const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
};

module.exports = getRandomColor;