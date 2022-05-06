import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SIGNIN } from '../../constants/PathConstants';
import { InputField } from '../../ui/InputField';
import NormalLoader from '../../ui/NormalLoader';

export default function SignUp() {
    const history = useHistory();
    const token = localStorage.getItem('token');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [university, setUniversity] = useState('');
    const [degreeProgram, setDegreeProgram] = useState('');
    const [company, setCompany] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [loader, setLoader] = useState(false);

    const registerHandler = async (username, password, email) => {
        const params = new URLSearchParams();

        params.append('username', username);
        params.append('email', email);
        params.append('password', password);
        params.append('position', 'Software Engineer');

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        };

        try {
            const response = await axios.post(`http://127.0.0.1:8000/candidate`, params, config);
            if (response) {
                setTimeout(() => {
                    setLoader(false);
                    history?.push(SIGNIN);
                }, 2000);
            }
        } catch (error: any) {
            console.log(error);
        }
    };

    return (
        <div className="flex p-40">
            <div className="w-1/2 border-2 border-b-4 border-gray-100 m-auto flex flex-col rounded-xl">
                <div className="m-auto text-lg">Logo</div>
                <div className="z-30 p-10 grid grid-rows-4 grid-flow-col gap-1">
                    <InputField placeHolder="First name" onChange={(e) => setFirstName(e)} />
                    <InputField placeHolder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <InputField placeHolder="University" onChange={(e) => setUniversity(e)} />
                    <InputField placeHolder="Last name" onChange={(e) => setLastName(e)} />
                    <InputField
                        placeHolder="Contact number"
                        onChange={(e) => setContactNumber(e)}
                    />
                    <InputField
                        placeHolder="Degree program"
                        onChange={(e) => setDegreeProgram(e)}
                    />
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
                    className="mt-3 w-1/2 m-auto my-10 bg-hireAI text-white py-3 rounded-3xl"
                    onClick={() => {
                        setLoader(true);
                        registerHandler(username, password, email);
                    }}
                >
                    {loader ? <NormalLoader /> : 'Sign Up'}
                </button>
                <div className="mt-1 text-gray-500 flex mx-auto">
                    <div className="mr-1">Already have an account?</div>
                    <div className="mr-1 text-hireAI" onClick={() => history?.push(SIGNIN)}>
                        Sign in
                    </div>
                </div>
            </div>
        </div>
    );
}
