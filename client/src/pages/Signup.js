import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

function SignUp(props) {
    const [formState, setFormState] = useState({
        email: "",
        password: "",
    });
    const [addUser] = useMutation(ADD_USER);

    const handleSignUpFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await addUser({
            variables: {
                email: formState.email,
                password: formState.password,
                firstName: formState.firstName,
                lastName: formState.lastName,
            },
        });
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // wrote skelton, but classNames and styling still needs to be done
    return (
        <div className='sign-up'>
            <h2 className="sign-up-words">
                Welcome to threadSHARE.
                Build your profile below.
            </h2>
            <form onSubmit={handleSignUpFormSubmit}>
                <div className='row'>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        placeholder="First Name"
                        name="firstName"
                        type="firstName"
                        id="firstName"
                        onChange={handleChange}
                    />
                </div>
                <div className='row'>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        placeholder="Last Name"
                        name="lastName"
                        type="lastName"
                        id="lastName"
                        onChange={handleChange}
                    />
                </div>
                <div className='row'>
                    <label htmlFor="email">Email:</label>
                    <input
                        placeholder="youremail@email.com"
                        name="email"
                        type="email"
                        id="email"
                        onChange={handleChange}
                    />
                </div>
                <div className="row">
                    <label htmlFor="password">Password:</label>
                    <input
                        placeholder="** Must contain 5 characters"
                        name="password"
                        type="password"
                        id="password"
                        onChange={handleChange}
                    />
                </div>
                <div className='button-row'>
                    <button className='btn' type="submit">Submit</button>
                </div>
            </form>
        </div>

    );
}

export default SignUp;
