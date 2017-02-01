//testing dependencies
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

//component to test
var Countdown = require('Countdown');

describe ('Countdown', () => {
	it('should exist', () => {
		expect(Countdown).toExist();
	});

	describe ('handleSetCountdown', () => {
		it('should set state to started and count down', (done) => {
			var countdown = TestUtils.renderIntoDocument(<Countdown/>);
			countdown.handleSetCountdown(10);

			expect(countdown.state.count).toBe(10);
			expect(countdown.state.countdownStatus).toBe('started');

			setTimeout(() => {
				expect(countdown.state.count).toBe(9);
				done();
			}, 1001)
		});
	});

	describe ('startTimer', () => {
		it('should never give a negative number on the clock', (done) => {
			var countdown = TestUtils.renderIntoDocument(<Countdown/>);
			countdown.startTimer(1);

			setTimeout(() => {
				expect(countdown.state.count).toBe(0);
				done();
			}, 3001)
		});

		it('should pause countdown on paused status', (done) => {
			var countdown = TestUtils.renderIntoDocument(<Countdown/>);
			countdown.handleSetCountdown(3);
			countdown.handleStatusChange('paused');

			setTimeout(() => {
				expect(countdown.state.count).toBe(3);
				expect(countdown.state.countdownStatus).toBe('paused');
				done();
			}, 1001);
		});

		it('should clear countdown on stopped status', (done) => {
			var countdown = TestUtils.renderIntoDocument(<Countdown/>);
			countdown.handleSetCountdown(3);
			countdown.handleStatusChange('stopped');

			setTimeout(() => {
				expect(countdown.state.count).toBe(0);
				expect(countdown.state.countdownStatus).toBe('stopped');
				done();
			}, 1001);
		});
	});
});