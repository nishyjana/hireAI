import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ALL_VACANCY_TABLE, VACANCY_LOG } from '../../constants/PathConstants';
import Loader from '../../util/Loader';

export default function AllVacancies() {
    const history = useHistory();
    const [vacancies, setVacancies] = useState([]);
    const [loader, setLoader] = useState(true)
    const GetAllVacancy = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/interview`);
            if (response?.data) {
                setLoader(false)
                setVacancies(response?.data);
            }
        } catch (error: any) {
            console.log(error);
        }
    };

    useEffect(() => {
        GetAllVacancy();
    },[vacancies]);
    return (
        <div className="p-20 flex flex-col w-full">
            <div className="flex justify-end my-2 mb-10">
                <div className="w-1/5 bottom-2 bg-hireAI p-3 rounded-3xl text-white text-center justify-end">
                    Create vacancy +
                </div>
            </div>
            {loader? <div className='m-auto'><Loader/></div> :vacancies?.map((vacancy) => {
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
                                onClick={() => history.push({pathname:VACANCY_LOG,state:{interviewId: vacancy?._id}})}
                            >
                                LOG PROGRESS
                            </div>
                            <div
                                className=" text-center justify-end mx-2 text-gray-600"
                                role="button"
                                tabIndex={0}
                                onClick={() => history.push({pathname:ALL_VACANCY_TABLE,state:{interviewId: vacancy?._id}})}
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
