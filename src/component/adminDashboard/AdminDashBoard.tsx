import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from '../../util/Loader';

export default function AdminDashBoard() {
    const [vacancies, setVacancies] = useState([]);
    const [loader, setLoader] = useState(true);

    const GetAllVacancy = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/interview`);
            if (response?.data) {
                setLoader(false);
                setVacancies(response?.data);
            }
        } catch (error: any) {
            console.log(error);
        }
    };

    useEffect(() => {
        GetAllVacancy();
    }, [vacancies]);

    return (
        <div className="p-20 flex flex-col w-full">
            <div className="p-20 flex  w-full">
                <div className="m-auto flex">
                    <div className="flex flex-col mx-2">
                        <div className="mx-2 border-2 p-10 rounded-xl text-3xl font-bold border-b-8">
                            03
                        </div>
                        <div className="m-2 text-center">Active</div>
                        <div className="mx-2 text-center">Vacancies</div>
                    </div>
                    <div className="flex flex-col mx-2">
                        <div className="mx-2 border-2 p-10 rounded-xl text-3xl font-bold border-b-8">
                            36
                        </div>
                        <div className="m-2  text-center">Total </div>
                        <div className="mx-2 text-center">Applications</div>
                    </div>
                    <div className="flex flex-col mx-2">
                        <div className="mx-2 border-2 p-10 rounded-xl text-3xl font-bold border-b-8">
                            23
                        </div>
                        <div className="m-2  text-center">Total Minutes</div>
                        <div className="mx-2 text-center">Minutes</div>
                        
                    </div>
                </div>
            </div>
            {loader ? (
                <div className="m-auto">
                    <Loader />
                </div>
            ) : (
                <>
                 <div className="font-bold mb-10 m-auto">DEADLINES</div>
                    {vacancies?.map((vacancy) => {
                        return (
                            <>
                                <div className="flex flex-col m-auto p-20 w-3/4 border-2 border-b-8 rounded-2xl border-gray-300 my-4">
                                    <div className="font-bold mb-10">
                                        Deadline: 23rd August 2022
                                    </div>
                                    <div className="font-bold mb-10">
                                        Vacancies: 3
                                    </div>
                                    <div>{vacancy?.designation}</div>
                                </div>
                            </>
                        );
                    })}
                </>
            )}
        </div>
    );
}
