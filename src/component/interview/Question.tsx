import React from 'react';
import { useHistory } from 'react-router-dom';
import { START_RECORDING } from '../../constants/PathConstants';

export default function Question() {
    const history = useHistory();
    return (
        <div className="p-20 flex flex-col justify-between w-full">
            <div className="m-auto mt-5 w-full flex">
                <div className="w-1/2 p-3 m-auto flex  flex-col">
                    <div className="w-11/12 m-auto flex">
                        <div className="w-full text-center px-10 py-10 m-auto my-20">
                            <div className="font-serif fon text-hireAI text-md pt-4 text-2xl">Question</div>
                            <div className="font-serif fon  text-md pt-4 text-gray-500 text-xl my-10">
                                Please give a brief introduction about your self?
                            </div>
                            <button
                                className="bg-hireAI rounded-3xl w-1/3 my-20 p-2 text-sm text-white"
                                onClick={() => {
                                    history.push(START_RECORDING);
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
