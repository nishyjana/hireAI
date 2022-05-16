import React, { useEffect, useState } from 'react';
import DataTable from '../../ui/DataTable';
import * as BsIcons from 'react-icons/bs';
import { VACANCY_LOG, WELCOME } from '../../constants/PathConstants';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import Loader from '../../util/Loader';

export default function AllVacanciesTable() {
    const [clickedCategory, setClickedCategory] = useState(null);
    const [clickedView, setClickedView] = useState(false);
    const history = useHistory();
    const location = useLocation<any>();
    const [candidates, setCandidates] = useState([]);
    const interviewID = location?.state?.interviewId;
    const [vacancy, setVacancy] = useState(null);
    const [loader, setLoader] = useState(true);

    const GetAllCandidates = async () => {
        try {
            const response = await axios.get(
                `http://127.0.0.1:8000/candidate/appliedCandidates/${interviewID}`,
            );
            if (response?.data) {
                setLoader(false);
                setCandidates(response?.data);
            }
        } catch (error: any) {
            console.log(error);
        }
    };

    useEffect(() => {
        GetAllCandidates();
    },[candidates]);

    const GetVacancy = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/interview/${interviewID}`);
            if (response) {
                setVacancy(response?.data);
            }
        } catch (error: any) {
            console.log(error);
        }
    };

    useEffect(() => {
        GetVacancy();
    }, [vacancy]);

    const columns = React.useMemo(
        () => [
            {
                Header: 'Id',
                accessor: '_id', // accessor is the "key" in the data
            },
            {
                Header: 'First name',
                accessor: 'firstname',
            },
            {
                Header: 'Email',
                accessor: 'email',
            },
            {
                Header: 'University',
                accessor: 'university',
            },
            {
                Header: 'Degree',
                accessor: 'degree_programme',
            },
            {
                id: 'view',
                accessor: '',
                disableSortBy: true,
                width: 5,
                Cell: (
                    <div className="cursor__pointer">
                        <button
                            value="menu cursor-pointer"
                            className="text-hireAI rounded cursor-pointer border border-transparent focus:outline-none lg:ml-2"
                        >
                            <BsIcons.BsTrash className="mx-auto" />
                        </button>
                    </div>
                ),
            },
            {
                id: 'actionColumn',
                accessor: '',
                disableSortBy: true,
                width: 5,
                Cell: (
                    <div className="cursor__pointer">
                        <button
                            value="menu cursor-pointer"
                            className=" rounded cursor-pointer underline text-blue-500 border border-transparent focus:outline-none lg:ml-2"
                            onClick={() => {
                                setClickedView(true);
                            }}
                        >
                            View
                        </button>
                    </div>
                ),
            },
        ],
        [],
    );

    useEffect(() => {
        if (clickedView && clickedCategory) {
            history.push({
                pathname: VACANCY_LOG,
                state: {
                    clickedId: clickedCategory?._id,
                    interviewId: interviewID,
                },
            });
        }
    }, [clickedView, clickedCategory, history,interviewID]);

    return (
        <div className="flex flex-col m-auto py-32 px-10 w-full">
            <div className="flex justify-between my-10">
                <div className="font-medium">{vacancy?.designation} </div>
                <div className="font-medium">Deadline: 23rd August 2022</div>
            </div>
            <div className="p-3 border-2 rounded-4xl border-gray-200 w-full">
                {loader ? (
                   <div className='m-auto'><Loader/></div> 
                ) : (
                    <DataTable
                        columns={columns}
                        data={candidates}
                        setExposeClickedItem={setClickedCategory}
                    />
                )}
            </div>
        </div>
    );
}
