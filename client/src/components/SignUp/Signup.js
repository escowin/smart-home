import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutation";
import Auth from "../../utils/auth";
import "./index.css";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  
  const [addUser, { error }] = useMutation(ADD_USER);
  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // use try/catch instead of promises to handle error
    try {
      //execute addContractor mutation and pass in variable data from form
      const { data } = await addUser({
        variables: { ...formState },
      });
      console.log(data);
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="section">
      <h2>Sign Up</h2>
      <form onSubmit={handleFormSubmit} className="signup-form">
        <label for="userName">username</label>
        <input
          name="username"
          type="text"
          id="userName"
          value={formState.userName}
          onChange={handleChange}
        />

        <label for="email">email</label>
        <input
          name="email"
          type="email"
          id="email"
          value={formState.email}
          onChange={handleChange}
        />

        <label for="password">password</label>
        <input
          name="password"
          type="password"
          id="password"
          value={formState.password}
          onChange={handleChange}
        />

        <button className="form-btn" type="submit">
          Submit
        </button>
        {error && <div>Sign up failed</div>}
      </form>
    </main>
  );
};
export default Signup;
