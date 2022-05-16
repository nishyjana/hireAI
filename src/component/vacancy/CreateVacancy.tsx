import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ALL_VACANCY } from '../../constants/PathConstants';
import { InputField } from '../../ui/InputField';
import NormalLoader from '../../ui/NormalLoader';

export default function CreateVacancy() {
    const [loader, setLoader] = useState(false);
    
    const [designation, setDesignation] = useState('');
    const [vacancy, setVacancy] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [description, setDescription] = useState('');

    const history = useHistory()

    
    const VacancyCreate = async (
        designation,
        vacancy,
        companyName,
        description,
    ) => {
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        };
        const params = new URLSearchParams();

        params.append('designation', designation);
        params.append('vacancy', vacancy);
        params.append('company_name', companyName);
        params.append('description', description);
        
        try {
            const response = await axios.post(
                `http://127.0.0.1:8000/interview`,
                params,
                config,
            );
            if (response?.data) {
                setLoader(false);
               
                setTimeout(()=>{
                    history.push(ALL_VACANCY)
                })
            }
        } catch (error: any) {
            console.log(error);
        }
    };
    return (
        <div className="w-full flex">
            <div className="m-auto mt-20 border-2 rounded-4xl border-gray-200 flex flex-col  border-b-8 w-1/2">
                <div className="m-auto text-lg">Vacancy Form</div>
                <div className="z-30 p-10 grid grid-rows-4 grid-flow-col gap-1">
                    <InputField
                        placeHolder="Designation"
                        onChange={(e) => setDesignation(e?.target.value)}
                        value={designation}
                    />

                    <InputField
                        placeHolder="vacancy"
                        onChange={(e) => setVacancy(e.target.value)}
                        value={vacancy}
                    />
                    <InputField
                        placeHolder="Company name"
                        onChange={(e) => setCompanyName(e.target.value)}
                        value={companyName}
                    />
                    <InputField
                        placeHolder="Description"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                </div>
                <button
                    className="mt-3 w-1/2 m-auto my-10 bg-hireAI text-white py-3 rounded-3xl"
                    onClick={() => {
                        setLoader(true);
                        VacancyCreate(
                            designation,
                            vacancy,
                            companyName,
                            description,
                        );
                    }}
                >
                    {loader ? <NormalLoader /> : 'Create vacancy'}
                </button>
            </div>
        </div>
    );
}
