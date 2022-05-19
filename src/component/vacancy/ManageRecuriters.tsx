import React, { useState } from 'react';
import DataTable from '../../userInterface/DataTable';
import * as BsIcons from 'react-icons/bs';

export default function ManageRecruiter() {
    const [clickedCategory, setClickedCategory] = useState(null);
    const data = React.useMemo(
        () => [
            {
                col1: '01',
                col2: 'Lorem Ipsum',
                col3: 'example@example.com',
            },
            {
                col1: '02',
                col2: 'Lorem Ipsum',
                col3: 'example@example.com',
            },
            {
                col1: '03',
                col2: 'Lorem Ipsum',
                col3: 'example@example.com',
            },
            {
                col1: '04',
                col2: 'Lorem Ipsum',
                col3: 'example@example.com',
            },
            {
                col1: '05',
                col2: 'Lorem Ipsum',
                col3: 'example@example.com',
            },
        ],
        [],
    );
    const columns = React.useMemo(
        () => [
            {
                Header: 'Id',
                accessor: 'col1', // accessor is the "key" in the data
            },
            {
                Header: 'Name',
                accessor: 'col2',
            },
            {
                Header: 'Email',
                accessor: 'col3',
            },

            {
                id: 'actionColumn',
                accessor: '',
                disableSortBy: true,
                width: 5,
                Cell: (
                    <div className="cursor__pointer">
                        <button
                            value="menu cursor-pointer"
                            className="text-gray-500 rounded cursor-pointer border border-transparent focus:outline-none lg:ml-2"
                        >
                            <BsIcons.BsTrash className="mx-auto" />
                        </button>
                    </div>
                ),
            },
        ],
        [],
    );
    return (
        <div className="flex flex-col m-auto py-32 px-10 w-full">
            <div className="flex justify-end my-2 mb-10">
                <div className="w-1/5 bottom-2 bg-hireAI p-3 rounded-3xl text-white text-center justify-end">
                    ADD RECRUITER +
                </div>
            </div>
            <div className="p-3 border-2 rounded-4xl border-gray-200 w-full">
                <DataTable
                    columns={columns}
                    data={data}
                    setExposeClickedItem={setClickedCategory}
                />
            </div>
        </div>
    );
}
