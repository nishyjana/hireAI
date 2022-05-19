import React, { useEffect, useState } from 'react';
import DataTable from '../../userInterface/DataTable';
import * as BsIcons from 'react-icons/bs';
import { VACANCY_LOG, WELCOME } from '../../constants/PathConstants';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import Loader from '../../util/Loader';

export default function LogProgress() {
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
    }, [candidates]);

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
            // {
            //     accessor: '',
            //     disableSortBy: true,
            //     width: 5,
            //     Cell: (
            //         <div className="cursor__pointer">
            //            <div className=''>PENDING</div>
            //         </div>
            //     ),
            // },
        ],
        [],
    );

    useEffect(() => {
        if (clickedView && clickedCategory) {
            history.push({
                pathname: VACANCY_LOG,
                state: {
                    clickedId: clickedCategory?._id,
                },
            });
        }
    }, [clickedView, clickedCategory, history]);

    return (
        <div className="flex flex-col m-auto py-32 px-10 w-full">
            <div className="p-3 border-2 rounded-4xl border-gray-200 w-full">
                {loader ? (
                    <div className="m-auto">
                        <Loader />
                    </div>
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
