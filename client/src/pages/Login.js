import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import SharImage from "../assets/share.jpg";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleUserLoginFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (err) {
      console.log("error:" + err);
      // alternative option- string interpolation
      // console.log(`error: ${err}`);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // html code for when you clicked on the login on the Nav bar. I just have the skelton code-- you still need to design
  return (
    <div className="sign-up">
      <h2 className="sign-up-words">Start Customizing Login</h2>
      <form onSubmit={handleUserLoginFormSubmit}>
        <div className="row">
          <label htmlFor="email"> Email address:</label>
          <input
            placeholder="youremail@email.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="row">
          <label htmlFor="userPassword">Password:</label>
          <input
            placeholder="** Must contain 5 characters"
            name="userpassword"
            type="password"
            id="userPassword"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p> The provided credentials are incorrect. Please try again.</p>
          </div>
        ) : null}
        <div className="button-row">
          <button className="btn" type="submit">
            Submit
          </button>
          <button className="btn" type="newUser">
            New User
          </button>
        </div>
      </form>
      <div>
        <img
          className="home-image"
          src={SharImage}
          alt="hands holding flower"
        />
      </div>
    </div>
  );
}

export default Login;
