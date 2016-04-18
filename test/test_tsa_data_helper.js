'use strict';
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var TSADataHelper = require('../tsa_data_helper');
chai.config.includeStack = true;

describe('TSADataHelper', function() {
	// instantiates a new TSADataHelper instance
	var subject = new TSADataHelper();
	// creates a new variable for the airport code
	var airport_code;
	describe('#getAirportWaitTime', function() {
		context('with a valid airport code', function() {
			it('returns a matching airport code', function() {
				// airport_code is specified
				airport_code = 'SFO';
				// ...and then fed to requestAirportWaitTime
				var value = subject.requestAirportWaitTime(airport_code).then(function(obj) {
					// then it returns
					return obj; // TODO: need to tweak this
					// return obj.IATA; // Original demo code return value
					// console.log('var value ' + value)
				});
				return expect(value).to.eventually.eq(airport_code);
			})
		})
	})
});