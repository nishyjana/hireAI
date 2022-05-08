import React from 'react';
import { useHistory } from 'react-router-dom';
import { QUESTION, START_RECORDING } from '../../constants/PathConstants';

export default function StartRecording() {
    const history = useHistory();
    return (
        <div className="p-20 flex flex-col justify-between w-full">
            <div className="mt-20 text-lg font-medium w-full">START RECORDING</div>
            <div className="m-auto mt-5 w-full flex">
                <div className="w-1/2 border-2 p-3 m-auto flex  flex-col rounded-2xl border-gray-100 border-b-4">
                    <div className="w-11/12 border-2 m-auto flex rounded-2xl border-gray-300 border-dashed">
                        <div className="w-full text-center px-10 py-10 m-auto my-20">
                            <img src="images\camera.svg" className="m-auto" alt="" />
                            <div className="font-serif fon text-hireAI text-md pt-4">
                                Start recording your interview
                            </div>
                            <button
                                className="bg-hireAI rounded-3xl w-1/3 p-2 my-4 text-white"
                                onClick={() => {
                                    history.push(QUESTION);
                                }}
                            >
                                RECORD
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
