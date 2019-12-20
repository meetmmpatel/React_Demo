import React from "react";

class MyHeader extends React.Component {
	render() {
		return (
			<div>
				<header className="App-header">
					<div id="headerid">
						<ul>
							<li>Home</li>
							<li>Services</li>
							<li>About Us</li>
						</ul>
					</div>
				</header>
			</div>
		);
	}
	// Any React class must have render function
	// and render will have to return an html tag
}

export default MyHeader;

