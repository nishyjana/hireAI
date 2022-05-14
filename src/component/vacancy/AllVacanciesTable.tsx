import React from 'react';
import DataTable from '../../ui/DataTable';

export default function AllVacanciesTable() {
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
                col1: '01',
                col2: 'Lorem Ipsum',
                col3: '02nd Feb 2022',
                col4: 'Lorem-Ipsum.pdf',
                col5: '90%',
            },
            {
                col1: '01',
                col2: 'Lorem Ipsum',
                col3: '02nd Feb 2022',
                col4: 'Lorem-Ipsum.pdf',
                col5: '90%',
            },
            {
                col1: '01',
                col2: 'Lorem Ipsum',
                col3: '02nd Feb 2022',
                col4: 'Lorem-Ipsum.pdf',
                col5: '90%',
            },
            {
                col1: '01',
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
                Header: 'Action',
                accessor: 'action',
            },
        ],
        [],
    );
    return (
        <div className="flex flex-col m-auto py-32 px-10 w-full">
            <div className="flex justify-between my-10">
                <div className="font-medium">Sales Intern: Batch 0049 </div>
                <div className="font-medium">Deadline: 23rd March 2022</div>
            </div>
            <div className="p-3 border-2 rounded-4xl border-gray-200 w-full">
                <DataTable columns={columns} data={data} />
            </div>
        </div>
    );
}
