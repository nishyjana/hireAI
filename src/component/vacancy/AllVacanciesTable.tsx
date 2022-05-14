import React from 'react';
import DataTable from '../../ui/DataTable';

export default function AllVacanciesTable() {
    const data = React.useMemo(
        () => [
            {
                col1: 'Hello',
                col2: 'World',
            },
            {
                col1: 'react-table',
                col2: 'rocks',
            },
            {
                col1: 'whatever',
                col2: 'you want',
            },
        ],
        [],
    );
    const columns = React.useMemo(
        () => [
            {
                Header: 'Column 1',
                accessor: 'col1', // accessor is the "key" in the data
            },
            {
                Header: 'Column 2',
                accessor: 'col2',
            },
        ],
        [],
    );
    return (
        <div className='py-2 border-2 rounded-2xl border-gray-200'>
            <DataTable columns={columns} data={data} />
        </div>
    );
}
