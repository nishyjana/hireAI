import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ALL_VACANCY_TABLE, VACANCY_LOG } from '../../constants/PathConstants';

export default function AllVacancies() {
    const history = useHistory();
    const [vacancies, setVacancies] = useState([]);
    const GetAllVacancy = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/interview`);
            if (response?.data) {
                setVacancies(response?.data);
            }
        } catch (error: any) {
            console.log(error);
        }
    };

    useEffect(() => {
        GetAllVacancy();
    });
    return (
        <div className="p-20 flex flex-col w-full">
            <div className="flex justify-end my-2 mb-10">
                <div className="w-1/5 bottom-2 bg-hireAI p-3 rounded-3xl text-white text-center justify-end">
                    Create vacancy +
                </div>
            </div>
            {vacancies?.map((vacancy) => {
                return (
                    <div className="flex flex-col m-auto px-20 py-10 w-1/2 border-2 border-b-8 rounded-4xl border-gray-300 my-2">
                        <div className="font-bold mb-1">{vacancy?.designation}</div>
                        <div className="text-sm mb-8">Deadline: 3rd August 2022</div>
                        <div>
                           {vacancy?.description}
                        </div>
                        <div className="flex justify-end my-2 mb-3 mt-10">
                            <div
                                className=" text-center justify-end mx-2 text-gray-600"
                                role="button"
                                tabIndex={0}
                                onClick={() => history.push(VACANCY_LOG)}
                            >
                                LOG PROGRESS
                            </div>
                            <div
                                className=" text-center justify-end mx-2 text-gray-600"
                                role="button"
                                tabIndex={0}
                                onClick={() => history.push(ALL_VACANCY_TABLE)}
                            >
                                MORE INFO
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
