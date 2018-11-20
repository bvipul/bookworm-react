import React from "react";
import { Form } from "semantic-ui-react";

class LoginForm extends React.Component {
	render() {
		return (
			<Form>
				<Form.Field>
					<label htmlFor="email">Email:</label>
					<input
						name="email"
						type="email"
						id="email"
						placeholder="abc@xyz.com"
					/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="password">Password:</label>
					<input name="password" type="password" id="password" />
				</Form.Field>
			</Form>
		);
	}
}

export default LoginForm;
