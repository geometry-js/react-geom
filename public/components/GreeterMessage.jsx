const React = require('react');

export class GreeterMessageComponent extends React.Component{
	render() {
		var name = this.props.name;
		var message = this.props.message;
		return (
			<div>
				<h1>Hello {name}!</h1>
				<p>{message}</p>
			</div>
		);
	}
};
