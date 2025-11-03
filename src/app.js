class Triangle {
    constructor(length, height) {
        this.length = length;
        this.height = height
    }
    
    getSideLength () {
        return this.length;
    }
    
    getSurfaceArea () {
        return (this.length * this.height) * 0.5;
    }
    
    getHeight () {
        return this.height;
    }
}

module.exports = {
    Triangle:Triangle
}