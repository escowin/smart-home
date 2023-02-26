import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutation";
import Auth from "../../utils/auth";
import './index.css'

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);
  // update state based on form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  //submit form
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      Auth.login(data.login.token);
    } catch (e) {
      console.log(e);
    }

    //clear form values
    setFormState({
      email: "",
      password: "",
    });
  };
  return (
    <main className="section">
      <h2>Log in</h2>
      <form onSubmit={handleFormSubmit} className="login-form">
		<label for="email">Email</label>
        <input
          name="email"
          type="email"
          id="email"
          value={formState.email}
          onChange={handleChange}
        />

		<label for="password">Password</label>
        <input
          name="password"
          type="password"
          id="password"
          value={formState.password}
          onChange={handleChange}
        />

        <button className="form-btn" type="submit">
          Log in
        </button>
      </form>
      {error && <div>invalid email or password</div>}
    </main>
  );
};
export default Login;
