import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

function Login(props) {
    const [formState, setFormState] = useState({ email: '', password: '' })
    const [login, { error }] = useMutation(LOGIN);

    const handleUserLoginFormSubmit = async event => {
        event.preventDefault();
        try {
            const mutationResponse = await login({ variables: { email: formState.email, password: formState.password } })
            const token = mutationResponse.data.login.token;
            Auth.login(token);
        }
        catch (err) {
            console.log("error:" + err);
            // alternative option- string interpolation 
            // console.log(`error: ${err}`);
        }
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    // html code for when you clicked on the login on the Nav bar. I just have the skelton code-- you still need to design
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleUserLoginFormSubmit}>
                <div>
                    <label htmlFor="email"> Email address:</label>
                    <input
                        placeholder="youremail@email.com"
                        name="email"
                        type="email"
                        id="email"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="userPassword">Password:</label>
                    <input
                        placeholder="** Must contain 5 characters"
                        name="userpassword"
                        type="userpassword"
                        id="userPassword"
                        onChange={handleChange}
                    />
                </div>
                {
                    error ? <div>
                        <p> The provided credentials are incorrect. Please try again.</p>
                    </div> : null
                }
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>

    );
}

export default Login;
