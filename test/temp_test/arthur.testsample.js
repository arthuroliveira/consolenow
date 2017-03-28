/**
 * Created by arthuroliveira on 3/27/17.
 */

var expect = require('chai').expect;
var sinon = require("sinon");

describe('Testing Mocha Node.js', function () {

    beforeEach(function () {
        // sinon.stub(console, "log").callsFake(function () {
        //     console.log('test');
        // });
    });

    it('checks if true is true', function () {
        console.log('testing this');
        expect(false).to.be.true;
    })
});