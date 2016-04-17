/*
Idiosyncrisy w/ API is base index doesn't start at 0.

					Time
WaitTimeIndex 1		no wait
WaitTimeIndex 2		 1-10 minutes
WaitTimeIndex 3		11-20 minutes
WaitTimeIndex 4		21-30 minutes
WaitTimeIndex 5		31+   minutes

These numbers were obtained by comparing data returned from API request with data displayed from identical request via webpage.

Perhaps there are more WaitTimeIndeces, but I'm unable to find a value greater than 5.

http://www.tsa.gov/data/apcp.xml
[This file contains all airport and checkpoint data]
Given new airports are seldom built, I think I'm going to store this information within the app to reduce network requests.

The TSA Security Checkpoint Wait Times API is called via:

http://apps.tsa.dhs.gov/MyTSAWebService/GetWaitTimes.ashx
[valid parameters: ap, output]

Usage examples include:

http://apps.tsa.dhs.gov/MyTSAWebService/GetWaitTimes.ashx?ap=DCA
[returns XML of last 25 wait times for DCA airport]
*/

'use strict';

var _ = require('lodash');
var rp = require('request-promise');
var ENDPOINT = ''

function TSADataHelper() { }

module.exports = TSADataHelper;