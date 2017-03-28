/**
 * Created by arthur.oliveira on 3/28/17.
 */

var sinon = require("sinon");
var assert = require('chai').assert;
var expect = require('chai').expect;
var MockProgram = require('../mocks/program');
var SetupCommand = require('../../src/commands/setup');

describe('Command Setup', function () {
    var program, setupCommand;
    beforeEach(function () {
        program = new MockProgram();
        // sinon.stub(console, "log").returns(void 0);
        setupCommand = new SetupCommand(program);
    });

    afterEach(function () {
        // console.log.restore();
    });


    describe('run command with --auth', function () {
        it('should create .auth file', function () {

            program.runWith('setup -a');

            // assert.equal(program.request.getCall(0).args[0].uri, 'http://finance.yahoo.com/d/quotes.csv?s=MSFT&f=snabwvej1');


        });
    });

    describe('run command with --table-mapping', function () {
        it('should create .auth file', function () {
            program.runWith('setup -t');
        });
    });
});
