import React from 'react';

export default function ThankYou() {
    return (
        <div className="p-20 flex flex-col justify-between w-full">
            <div className="m-auto mt-5 w-full flex">
                <div className="w-1/2 p-3 m-auto my-10 flex border-2 border-gray-100 border-b-2 rounded-2xl  flex-col">
                    <div className="w-11/12 m-auto flex">
                        <div className="w-full text-center px-10 py-10 m-auto my-20">
                            <div className="font-serif fon text-hireAI text-md pt-4 text-2xl">
                                Thank you for applying
                            </div>
                            <div className="font-serif fon  text-md pt-4 text-gray-500 text-sm my-10">
                                We will get back to you within three working days
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
