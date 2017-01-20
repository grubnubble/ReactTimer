var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Main = (props) => {
	return (
		<div>
			<div>
				<div>
					<p>Main.jsx rendered</p>
					{props.children}
				</div>
			</div>
		</div>
	);
};

module.exports = Main;