class Triangle {
    constructor(base, height) {
        this.base = base;
        this.height = height
    }
    
    getSideLength () {
        return this.base;
    }
    
    getSurfaceArea () {
        return (this.base * this.height) * 0.5;
    }
    
    getHeight () {
        return this.height;
    }
}

module.exports = {
    Triangle:Triangle
}