describe('Fibonacci Sequence Test', () =>{
    let fibon = require('../../lib/fibb/fibonacci.js');

    describe("fibon", () => {
        it('It must be a function', ()=>{
            expect(fibon).toBeOfType('function');
        })
    })

    describe("input value", ()=>{
        it('It must not be empty', ()=>{
            // empty
            // expect(fibon()).toBeEmpty();
            // expect(fibon()).toBe("Must have a specific fibonacci number it is looking for");
            expect(function(){fibon()}).toThrowError(Error)
        })
        it('It must be a positive Integer', ()=>{
            expect(function(){fibon(-4)}).toThrowError(Error);
        })
        it('It must not be an alphabet', ()=>{
            expect(function(){fibon(a)}).toThrowError(Error);
        })
    })

    describe("Results", ()=>{
        it('must give correct answers', ()=>{
            expect(fibon(5)).toBe(5)
            expect(fibon(10)).toBe(55)
        })
    })
} )