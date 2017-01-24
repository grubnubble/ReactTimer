var React = require('react');
var Navigation = require('Navigation');
var Clock = require('Clock');
var Controls = require('Controls');

var Main = (props) => {
	return (
		<div>
			<div>
				<Navigation/>
				<Clock/>	
				<div>
					<p>Main.jsx rendered</p>
					{props.children}
				</div>
			</div>
		</div>
	);
};

module.exports = Main;