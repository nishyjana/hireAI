/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import jwt from 'jwt-decode';
import { InputField } from '../../ui/InputField';
import NormalLoader from '../../ui/NormalLoader';
import { Formik } from 'formik';
import { START_INTERVIEW } from '../../constants/PathConstants';

export default function ApplicationForm() {
    const history = useHistory();
    const location = useLocation<any>();
    const [userDetails, setUserDetails] = useState(null);
    const url = location?.state?.data;
    const token = localStorage.getItem('token');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [university, setUniversity] = useState('');
    const [degreeProgram, setDegreeProgram] = useState('');
    const [company, setCompany] = useState('');

    const [user, setUser] = useState(null);
    const [contactNumber, setContactNumber] = useState('');
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        if (token) {
            const tokenDetails: any = jwt(token);
            setUser(tokenDetails?.id);
        }
    }, [token]);

    const UserView = async (user) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        try {
            const response = await axios.get(`http://127.0.0.1:8000/candidate/${user}`, config);
            if (response) {
                setUserDetails(response?.data);
                console.log(response?.data?.username);
            }
        } catch (error: any) {
            console.log(error);
        }
    };

    const UserUpdate = async (
        firstName,
        lastName,
        email,
        university,
        contactNumber,
        username,
        degreeProgram,
    ) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const objectBody = {
            firstname: firstName,
            lastname: lastName,
            username: username,
            email: email,
            university: university,
            contact_number: contactNumber,
            degree_programme: degreeProgram,
        };
        try {
            const response = await axios.put(
                `http://127.0.0.1:8000/candidate/${user}`,
                objectBody,
                config,
            );
            if (response?.data) {
                setLoader(false);
                setTimeout(()=>{
                    history.push(START_INTERVIEW)
                })
            }
        } catch (error: any) {
            console.log(error);
        }
    };

    useEffect(() => {
        UserView(user);
    }, [user]);

    useEffect(() => {
        if (userDetails) {
            setFirstName(userDetails?.firstname);
            setCompany(userDetails?.company);
            setContactNumber(userDetails?.contact_number);
            setDegreeProgram(userDetails?.degree_programme);
            setEmail(userDetails?.email);
            setLastName(userDetails?.lastname);
            setUsername(userDetails?.username);
            setUniversity(userDetails?.university);
        }
    }, [userDetails]);

    return (
        <div className="flex p-40">
            <div className="w-1/2 border-2 border-b-4 border-gray-100 m-auto flex flex-col rounded-xl">
                <div className="m-auto text-lg">Application Form</div>
                <div className="z-30 p-10 grid grid-rows-4 grid-flow-col gap-1">
                    <InputField
                        placeHolder="First name"
                        onChange={(e) => setFirstName(e?.target.value)}
                        value={firstName}
                    />

                    <InputField
                        placeHolder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <InputField
                        placeHolder="University"
                        onChange={(e) => setUniversity(e.target.value)}
                        value={university}
                    />
                    <InputField
                        placeHolder="Contact number"
                        onChange={(e) => setContactNumber(e.target.value)}
                        value={contactNumber}
                    />

                    <InputField
                        placeHolder="Last name"
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                    />
                    <InputField
                        placeHolder="Username"
                        readonly
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />
                    <InputField
                        placeHolder="Degree program"
                        onChange={(e) => setDegreeProgram(e.target.value)}
                        value={degreeProgram}
                    />
                </div>
                <button
                    className="mt-3 w-1/2 m-auto my-10 bg-hireAI text-white py-3 rounded-3xl"
                    onClick={() => {
                        setLoader(true);
                        UserUpdate(
                            firstName,
                            lastName,
                            email,
                            university,
                            contactNumber,
                            username,
                            degreeProgram,
                        );
                    }}
                >
                    {loader ? <NormalLoader /> : 'Proceed'}
                </button>
            </div>
        </div>
    );
}
