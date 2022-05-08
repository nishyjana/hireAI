import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import * as BsIcons from 'react-icons/bs';
import Loader from '../../util/Loader';
import { APPLICATION_FORM } from '../../constants/PathConstants';

export default function CompanyView() {
    const location = useLocation<any>();
    const [response, setResponse] = useState<any>(null);
    const history = useHistory();
    const url = location?.state?.companyUrl;

    const linkView = async (url) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        try {
            const response = await axios.get(`${url}`, config);
            if (response) {
                setResponse(response);
                localStorage.setItem('interviewId', response?.data?._id);
            }
        } catch (error: any) {
            console.log(error);
        }
    };

    useEffect(() => {
        linkView(url);
    }, [url]);

    return (
        <div className="flex flex-col w-full h-full items-center pt-28 3xl:pt-36">
            <div className="w-1/3 h-1/2 border-b-8 flex m-auto mt-20 flex-col rounded-3xl border-gray-100 border-2 pt-20 pb-2  px-16 3xl:pt-36">
                {response?.data ? (
                    <>
                        <div className="z-30 flex flex-col m-auto">
                            <div className="text-gray-500 text-sm">COMPANY</div>
                            <div className="my-1">{response?.data?.company_name}</div>

                            <div className="text-gray-500 text-sm mt-4">DESIGNATION</div>
                            <div className="my-1">{response?.data?.designation}</div>

                            <div className="text-gray-500 text-sm mt-4">JOB DESCRIPTION</div>
                            <div className="my-1">{response?.data?.description}</div>
                        </div>
                        <button
                            className="py-3 my-10 flex rounded-3xl w-1/2 m-auto text-center border-2 border-hireAI bg-hireAI font-sans text-white text-xs px-14 3xl:px-12 3xl:ml-10 mx-auto"
                            onClick={() =>
                                history.push({
                                    state: { data: response?.data },
                                    pathname: APPLICATION_FORM,
                                })
                            }
                        >
                            <div className="flex text-center ml-2"> PROCEED </div>
                        </button>
                    </>
                ) : (
                    <Loader />
                )}
            </div>
        </div>
    );
}
