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
    
    getVolume () {
        return Math.pow(this.length,3);
    }
}

module.exports = {
    Cube:Cube
}