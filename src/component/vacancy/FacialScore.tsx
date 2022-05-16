import React from 'react';
import ProgressBars from '../../util/ProgressBar';

interface Props {
    candidateID: number;
}
export default function FacialScore() {
    return (
        <div className=" grid grid-rows-2 grid-flow-col gap-1 p-10 m-auto ">
            <div className="flex  flex-col my-6">
                <div className="font-bold"> Happy </div>
                <div className="mx-20">
                    <ProgressBars percentage={90} />
                </div>
            </div>
            <div className="flex  flex-col my-6">
                <div className="font-bold"> Sad </div>
                <div className="mx-20">
                    <ProgressBars percentage={10} />
                </div>
            </div>
            <div className="flex  flex-col my-6">
                <div className="font-bold"> Disgust </div>
                <div className="mx-20">
                    <ProgressBars percentage={33} />
                </div>
            </div>
            <div className="flex  flex-col my-6">
                <div className="font-bold"> Surprise </div>
                <div className="mx-20">
                    <ProgressBars percentage={40} />
                </div>
            </div>
            <div className="flex  flex-col my-6">
                <div className="font-bold"> Angry </div>
                <div className="mx-20">
                    <ProgressBars percentage={10} />
                </div>
            </div>
            <div className="flex  flex-col my-6">
                <div className="font-bold"> Fear </div>
                <div className="mx-20">
                    <ProgressBars percentage={80} />
                </div>
            </div>
        </div>
    );
}
