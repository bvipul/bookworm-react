import React from "react";
import { Form, Button, Message } from "semantic-ui-react";
import Validator from "validator";
import InlineError from "./../messages/InlineError";

class LoginForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: {
				email: "",
				password: ""
			},
			loading: false,
			errors: {}
		};
	}

	onChange = e => {
		this.setState({
			data: { ...this.state.data, [e.target.name]: e.target.value }
		});
	};

	onSubmit = () => {
		const errors = this.validate(this.state.data);

		this.setState({ errors });

		if (Object.keys(errors).length === 0) {
			this.props
				.submit(this.state.data)
				.catch(err =>
					this.setState({ errors: err.response.data.errors })
				);
		}
	};

	validate = ({ email, password }) => {
		const errors = {};
		if (!Validator.isEmail(email)) errors.email = "Invalid email";
		if (!password) errors.password = "Can't be blank";
		return errors;
	};

	render() {
		const { errors } = this.state;
		return (
			<Form onSubmit={this.onSubmit}>
				{errors.global ? (
					<Message negative>
						<Message.Header>Something went wrong!</Message.Header>
						<p>{errors.global}</p>
					</Message>
				) : (
					""
				)}
				<Form.Field error={errors.email ? true : false}>
					<label htmlFor="email">Email:</label>
					<input
						name="email"
						type="email"
						id="email"
						placeholder="abc@xyz.com"
						onChange={this.onChange}
					/>
					{errors.email ? <InlineError message={errors.email} /> : ""}
				</Form.Field>
				<Form.Field error={errors.password ? true : false}>
					<label htmlFor="password">Password:</label>
					<input
						name="password"
						type="password"
						id="password"
						placeholder="password"
						onChange={this.onChange}
					/>
					{errors.password ? (
						<InlineError message={errors.password} />
					) : (
						""
					)}
				</Form.Field>
				<Button primary type="submit" content="Login" />
			</Form>
		);
	}
}

export default LoginForm;