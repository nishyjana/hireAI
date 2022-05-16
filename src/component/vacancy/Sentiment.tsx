import React from 'react';
import ProgressBars from '../../util/ProgressBar';

interface Props {
    candidateID: number;
}
export default function Sentiment() {
    return (
        <div className=" grid grid-rows-1 grid-flow-col gap-1 p-10 m-auto ">
            <div className="flex  flex-col my-6">
                <div className="font-bold"> Positivity </div>
                <div className="mx-20">
                    <ProgressBars percentage={90} />
                </div>
            </div>
            <div className="flex  flex-col my-6">
                <div className="font-bold"> Negativity </div>
                <div className="mx-20">
                    <ProgressBars percentage={10} />
                </div>
            </div>
            <div className="flex  flex-col my-6">
                <div className="font-bold"> Neutral </div>
                <div className="mx-20">
                    <ProgressBars percentage={63} />
                </div>
            </div>
        </div>
    );
}
