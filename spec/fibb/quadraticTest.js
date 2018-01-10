describe('Quadratic Test', ()=>{
    let quad  = require('../../lib/fibb/quadratic.js');

    describe('quad', ()=>{
        it('must be a function', ()=>{
            expect(quad).toBeOfType('function');
        })
        it('must take 3 arguments', ()=>{
            expect(function(){quad()}).toThrowError(Error)
            expect(function(){quad(1)}).toThrowError(Error)
            expect(function(){quad(1,3)}).toThrowError(Error)
        })
        it('all arguments must be numbers', ()=>{
            expect(function(){quad(a,1,2)}).toThrowError(Error)
            expect(function(){quad(1,b,2)}).toThrowError(Error)
            expect(function(){quad(1,2,c)}).toThrowError(Error)
            expect(function(){quad(1,b,c)}).toThrowError(Error)
            expect(function(){quad(a,1,c)}).toThrowError(Error)
            expect(function(){quad(a,b,1)}).toThrowError(Error)
            expect(function(){quad(a,b,c)}).toThrowError(Error)
        })
        it('the coefficient of a must not be 0', ()=>{
            expect(function(){quad(0, 4, 5)}).toThrowError(Error)
        })
    })

    describe('result produced', ()=>{
        it('must be of type object', ()=>{
            expect(quad(1, 4, 3)).toBeOfType('object')
        })
        
        it('must produce 2 values', ()=>{
            expect(quad(1, 4, 3)).toEqual([-1, -3])
        })
        it('must throw error for results with complex roots', ()=>{  
            expect(function(){quad(1, 2, 3)}).toThrowError(Error);            
        })
    })
})