import React from 'react';

export default function AdminDashBoard() {
    return (
        <div className="p-20 flex flex-col w-full">
            <div className="p-20 flex  w-full">
                <div className="m-auto flex">
                    <div className="flex flex-col mx-2">
                        <div className="mx-2 border-2 p-10 rounded-xl text-3xl font-bold border-b-8">
                            03
                        </div>
                        <div className="m-2 text-center">Vacancies</div>
                    </div>
                    <div className="flex flex-col mx-2">
                        <div className="mx-2 border-2 p-10 rounded-xl text-3xl font-bold border-b-8">
                            36
                        </div>
                        <div className="m-2  text-center">Total Applications</div>
                    </div>
                    <div className="flex flex-col mx-2">
                        <div className="mx-2 border-2 p-10 rounded-xl text-3xl font-bold border-b-8">
                            23
                        </div>
                        <div className="m-2  text-center">Total Minutes</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col m-auto p-20 w-3/4 border-2 border-b-8 rounded-2xl border-gray-300">
                <div className="font-bold mb-10">DEADLINES</div>
                <div>sales intern</div>
            </div>
        </div>
    );
}
