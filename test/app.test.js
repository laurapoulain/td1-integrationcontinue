const Triangle = require('../src/app').Triangle;
const expect = require('chai').expect;

describe('Testing the Triangle Functions', function() {
    it('1. The base of the Triangle', function(done) {
        let t1 = new Triangle(10, 5);
        expect(t1.getBase()).to.equal(10);
        done();
    });
    
    it('2. The surface area of the Triangle', function(done) {
        let t2 = new Triangle(6,10);
        expect(t2.getSurfaceArea()).to.equal(6 * 10 * 0.5);    //surface = base * height * 0.5
        done()
    });
    
    it('3. The volume of the Cube', function(done) {
        let c3 = new Cube(1,3);
        expect(c3.getVolume()).to.equal(343);
        done();
    });
    
});