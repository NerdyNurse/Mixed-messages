const assert = require('assert');
const mainFunctions =require('../main.js');


describe('returns random target of insult (either "you" or "your *object*")', () => {
    it('should return either "you" or "your..."', () =>{
        // setup
        let target = '';
        const targets = mainFunctions.targets;
       

        // exercise
        target = mainFunctions.getRandom(targets);

        // verify
        assert.ok(target === 'You' || target === 'Your')

        // teardown
        target = "";
    })

    it('should add an object if *your* is chosen', () => {
        // setup
        target = 'Your';

        // exercise
        

    })
})