import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { SIGNUP, START_INTERVIEW, WELCOME } from '../../constants/PathConstants';
import { InputField } from '../../ui/InputField';
import NormalLoader from '../../ui/NormalLoader';
import Loader from '../../util/Loader';

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
                    setLoader(false);
                    history?.push(START_INTERVIEW);
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
                <div className="mx-auto text-2xl font-bold -mt-10">LOGO</div>
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
