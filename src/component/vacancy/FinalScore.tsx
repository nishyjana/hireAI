import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from '../../util/Loader';
interface Props {
    candidateID: number;
    interviewID: number;
}

export default function FinalScore({ candidateID, interviewID }: Props) {
    const [finalMarks, setFinalMarks] = useState(78);
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
    }, []);
    return (
        <div className="flex justify-between w-full px-10 py-32">
            {loader ? (
                 <div className='m-auto'><Loader/></div> 
            ) : (
                <>
                    <div className="flex flex-col">
                        <div className="font-bold text-xl">70%</div>
                        <div className="mt-1 text-center">Facial score</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="font-bold text-xl">90%</div>
                        <div>Sentiment score</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="font-bold text-xl">80%</div>
                        <div>Overall score</div>
                    </div>
                    <div className="flex flex-col">
                        <div
                            className={`font-bold text-xl ${
                                interview?.scores?.final_score === 'hired'
                                    ? 'text-green-600'
                                    : 'text-red-600'
                            }`}
                        >
                            {interview?.scores?.final_score === 'hired' ? 'HIRED' : 'REJECTED'}
                        </div>
                        <div>Final remarks</div>
                    </div>
                </>
            )}
        </div>
    );
}
