import React, { useState } from 'react';

interface Props {
    candidateID: number;
}
export default function FinalScore() {
    const [finalMarks, setFinalMarks] = useState(78);
    return (
        <div className="flex justify-between w-full px-10 py-32">
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
                        finalMarks > 70 ? 'text-green-600' : 'text-red-600'
                    }`}
                >
                    {finalMarks > 70 ? 'HIRED' : 'REJECTED'}
                </div>
                <div>Final remarks</div>
            </div>
        </div>
    );
}
