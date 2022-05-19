/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { DASHBOARD, SIGNUP, WELCOME } from '../../constants/PathConstants';
import { InputField } from '../../userInterface/InputField';
import NormalLoader from '../../userInterface/NormalLoader';
import jwt from 'jwt-decode';

export default function LogIn() {
    const history = useHistory();
    const [loader, setLoader] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const loginHandler = async (username, password) => {
        const params = new URLSearchParams();

        params.append('username', username);
        params.append('password', password);

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        };

        try {
            const response = await axios.post(`http://127.0.0.1:8000/login`, params, config);
            if (response.data.access_token) {
                setTimeout(() => {
                    const tokenDetails: any = jwt(response.data.access_token);
                    console.log(tokenDetails);
                    if (tokenDetails?.role === 'admin') {
                        setLoader(false);
                        history?.push(DASHBOARD);
                    } else {
                        setLoader(false);
                        history?.push(WELCOME);
                    }
                }, 2000);
            }
            localStorage.setItem('token', response.data.access_token);
        } catch (error: any) {
            console.log(error);
        }
    };

    return (
        <div className="flex flex-col w-full h-full items-center pt-28 3xl:pt-36">
            <div className="w-1/3 h-1/2 border-b-8 flex flex-col rounded-3xl border-gray-100 border-2 pt-20 pb-2  px-16 3xl:pt-36">
                <img
                    src="images\whitelogo.svg"
                    className=" mx-auto w-48 h-10  -mt-10 mb-20"
                    alt=""
                />
                <div className="z-30">
                    <InputField
                        placeHolder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <InputField
                        placeHolder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    className="mt-10 w-full bg-hireAI text-white py-3 rounded-3xl"
                    onClick={() => {
                        setLoader(true);
                        loginHandler(username, password);
                    }}
                >
                    {loader ? <NormalLoader /> : 'Sign In'}
                </button>
                <div className="mt-10 text-gray-500 flex mx-auto">
                    <div className="mr-1">Don’t have an account?</div>
                    <div className="mr-1 text-hireAI" onClick={() => history?.push(SIGNUP)}>
                        Sign up |
                    </div>
                    <div className="mr-1 text-hireAI">Forgot password?</div>
                </div>
            </div>
            <img
                src="images/Device.svg"
                alt=""
                className="z-30 mt-24 pr-44 -ml-52 fixed flex 3xl:pt-28 3xl:-ml-72"
            />
        </div>
    );
}
