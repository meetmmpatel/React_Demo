import React from "react";

class DemoClass extends React.Component {
	render() {
		return (
			<div>
				<ContentOne></ContentOne>
				<ContentTwo></ContentTwo>
			</div>
		);
	}
}

class ContentOne extends React.Component {
	render() {
		return (
			<div>
				<h1>This is Content One</h1>
				<p>Content One information</p>
			</div>
		);
	}
}

class ContentTwo extends React.Component {
	render() {
		return (
			<div>
				<h1>This is Content Two</h1>
				<p>Content Two information</p>
			</div>
		);
	}
}

export default DemoClass;
