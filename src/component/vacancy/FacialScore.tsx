import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProgressBars from '../../util/ProgressBar';

interface Props {
    candidateID: number;
    interviewID: number;
}
export default function FacialScore({ candidateID, interviewID }: Props) {
    const [candidate, setCandidate] = useState(null);
    const [interview, setInterview] = useState(null);
    const GetAllCandidates = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/candidate/${candidateID}`);
            if (response) {
                // setLoader(false);
                // setCandidate(response?.data);
                setCandidate(response?.data);
            }
        } catch (error: any) {
            console.log(error);
        }
    };

    useEffect(() => {
        const interview = candidate?.interview?.find((interview) => interview?.interview_id === interviewID);
        setInterview(interview);
    }, [candidate, interviewID]);

    useEffect(() => {
        GetAllCandidates();
    },[candidate]);
    return (
        <div className=" grid grid-rows-2 grid-flow-col gap-1 p-10 m-auto ">
            <div className="flex  flex-col my-6">
                <div className="font-bold"> Happy </div>
                <div className="mx-20">
                    <ProgressBars percentage={interview?.scores?.facial_scores?.happy} />
                </div>
            </div>
            <div className="flex  flex-col my-6">
                <div className="font-bold"> Sad </div>
                <div className="mx-20">
                    <ProgressBars percentage={interview?.scores?.facial_scores?.sad} />
                </div>
            </div>
            <div className="flex  flex-col my-6">
                <div className="font-bold"> Disgust </div>
                <div className="mx-20">
                    <ProgressBars percentage={interview?.scores?.facial_scores?.disgust} />
                </div>
            </div>
            <div className="flex  flex-col my-6">
                <div className="font-bold"> Surprise </div>
                <div className="mx-20">
                    <ProgressBars percentage={interview?.scores?.facial_scores?.surprise} />
                </div>
            </div>
            <div className="flex  flex-col my-6">
                <div className="font-bold"> Angry </div>
                <div className="mx-20">
                    <ProgressBars percentage={interview?.scores?.facial_scores?.angry} />
                </div>
            </div>
            <div className="flex  flex-col my-6">
                <div className="font-bold"> Fear </div>
                <div className="mx-20">
                    <ProgressBars percentage={interview?.scores?.facial_scores?.fear} />
                </div>
            </div>
        </div>
    );
}
