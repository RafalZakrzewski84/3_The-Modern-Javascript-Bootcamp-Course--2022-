// Adding methods to an object!
const math = {
    numbers: [1, 2, 3, 4, 5],
    add: function(x, y) {
        return x + y;
    },
    multiply: function(x, y) {
        return x * y;
    }
}

// To execute multiply:
math.multiply(5, 9); //45


//My example
const circleFormulas = {
    diameter: function(r) {
        return 2 * r;
    },
    area: function(r) {
        return 3.14 * r * r;
    },
    circumfernce: function(r) {
        return 2 * 3.14 * r;
    }
}

const circleFormulasShort = {
    diameter(r) {
        return 2 * r;
    },
    area(r) {
        return 3.14 * r * r;
    },
    circumfernce(r) {
        return 2 * 3.14 * r;
    }
}