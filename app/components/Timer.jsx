var React = require('react');
var Clock = require('Clock');

var Timer = (props) => {
	return (
		<div>
			<p>Timer.jsx rendered</p>
			<Clock/>
		</div>
	);
};

module.exports = Timer;