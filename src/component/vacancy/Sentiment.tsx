import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from '../../util/Loader';
import ProgressBars from '../../util/ProgressBar';

interface Props {
    candidateID: number;
    interviewID: number;
}
export default function Sentiment({ candidateID, interviewID }: Props) {
    const [candidate, setCandidate] = useState(null);
    const [interview, setInterview] = useState(null);
    const [loader, setLoader] = useState(true);
    const GetAllCandidates = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/candidate/${candidateID}`);
            if (response) {
                setLoader(false);
                // setCandidate(response?.data);
                setCandidate(response?.data);
            }
        } catch (error: any) {
            console.log(error);
        }
    };

    useEffect(() => {
        const interview = candidate?.interview?.find(
            (interview) => interview?.interview_id === interviewID,
        );
        setInterview(interview);
    }, [candidate, interviewID]);

    useEffect(() => {
        GetAllCandidates();
    }, [candidate]);
    return (
        <>
            {loader ? (
                <Loader />
            ) : (
                <>
                    {' '}
                    <div className=" grid grid-rows-1 grid-flow-col gap-1 p-10 m-auto ">
                        <div className="flex  flex-col my-6">
                            <div className="font-bold"> Positivity </div>
                            <div className="mx-20">
                                <ProgressBars
                                    percentage={
                                        interview?.scores?.sentimental_scores?.pos
                                    }
                                />
                            </div>
                        </div>
                        <div className="flex  flex-col my-6">
                            <div className="font-bold"> Negativity </div>
                            <div className="mx-20">
                                <ProgressBars
                                    percentage={
                                        interview?.scores?.sentimental_scores?.neg
                                    }
                                />
                            </div>
                        </div>
                        <div className="flex  flex-col my-6">
                            <div className="font-bold"> Overall emotion</div>
                            <div className="mx-20">
                                <ProgressBars
                                    percentage={
                                        interview?.scores?.sentimental_scores?.pos_neg
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
