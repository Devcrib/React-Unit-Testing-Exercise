describe('StringBuilder', ()=>{
    const strBuild = require('../../lib/fibb/stringbuilder.js');

    describe('strBuild', ()=>{
        it('must be a object', ()=>{
           expect(strBuild).toBeOfType('object');
        })

        it('must support method chaining', ()=>{
            strBuild.empty();
            expect(strBuild.put('jules').put('jake').insert('james', 1).finalBuild()).toBe('jules james jake')
        })
    })

    describe('strBuild empty method result', ()=>{
        it('must clear strings when the empty method is used', ()=>{
            expect(strBuild.put('jules').put('jake').insert('james', 1).empty().finalBuild()).toBe('Empty string')
        })
    })

    describe('strBuild isEmpty method result', ()=>{
        it('must tell if the string is empty', ()=>{
            expect(strBuild.put('jules').put('jake').insert('james', 1).empty().finalBuild()).toBe('Empty string')
        })
    })

    describe('strBuild result', ()=>{
        it('must give error when insert method is passed pos value less than 0', ()=>{
            strBuild.empty();
            expect(function(){strBuild.put('jules').put('jake').insert('james', -1).finalBuild()}).toThrowError(Error)
            strBuild.empty();
            expect(strBuild.put('jules').put('jake').insert('james', 5).finalBuild()).toBe('jules jake james')
        })
    })
    

})