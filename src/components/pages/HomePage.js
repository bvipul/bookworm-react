import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const HomePage = props => (
	<div>
		<h1>Home Page</h1>
		<Link to="/login">
			<Button primary>Login</Button>
		</Link>
	</div>
);

export default HomePage;
