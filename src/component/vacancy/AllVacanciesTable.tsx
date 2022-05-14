import React, { useState } from 'react';
import DataTable from '../../ui/DataTable';
import * as BsIcons from 'react-icons/bs';

export default function AllVacanciesTable() {
    const [clickedCategory, setClickedCategory] = useState(null);
    const data = React.useMemo(
        () => [
            {
                col1: '01',
                col2: 'Lorem Ipsum',
                col3: '02nd Feb 2022',
                col4: 'Lorem-Ipsum.pdf',
                col5: '90%',
            },
            {
                col1: '02',
                col2: 'Lorem Ipsum',
                col3: '02nd Feb 2022',
                col4: 'Lorem-Ipsum.pdf',
                col5: '90%',
            },
            {
                col1: '03',
                col2: 'Lorem Ipsum',
                col3: '02nd Feb 2022',
                col4: 'Lorem-Ipsum.pdf',
                col5: '90%',
            },
            {
                col1: '04',
                col2: 'Lorem Ipsum',
                col3: '02nd Feb 2022',
                col4: 'Lorem-Ipsum.pdf',
                col5: '90%',
            },
            {
                col1: '05',
                col2: 'Lorem Ipsum',
                col3: '02nd Feb 2022',
                col4: 'Lorem-Ipsum.pdf',
                col5: '90%',
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
                Header: 'Date & time',
                accessor: 'col3',
            },
            {
                Header: 'Cv',
                accessor: 'col4',
            },
            {
                Header: 'Name',
                accessor: 'col5',
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
            <div className="flex justify-between my-10">
                <div className="font-medium">Sales Intern: Batch 0049 {clickedCategory?.col1} </div>
                <div className="font-medium">Deadline: 23rd March 2022</div>
            </div>
            <div className="p-3 border-2 rounded-4xl border-gray-200 w-full">
                <DataTable columns={columns} data={data} setExposeClickedItem={setClickedCategory} />
            </div>
        </div>
    );
}
