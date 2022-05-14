/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from 'react';
import { useTable, useRowSelect, usePagination, useExpanded } from 'react-table';

interface Props {
    data: any;
    columns: any;
    pageCount?: number;
    setSelectedItems?;
    tabStatus?: any;
    setPageIndex?;
    setDefaultPageSize?;
    menuItems?: any;
    setSelectedMenuItem?: (value: any) => void;
    setExposeClickedItem?;
    showReorderTooltip?: boolean;
    hidePagination?: boolean;
    hideSelection?: boolean;
    selectedDefaultItems?: any;
    tableType?: string;
    checkbox?: boolean;
    radioBtn?: boolean;
    checkboxHeader?: boolean;
    clickedItemPointsData?: any;
    selectedTab?: any;
    isRowColour?: boolean;
    isCategoryProductsView?: any;
}

const DataTable = ({
    data,
    columns,
    pageCount: controlledPageCount,
    setSelectedItems,
    setDefaultPageSize,
    setExposeClickedItem,
    selectedTab,
}: Props) => {
    const [showMenu, setShowMenu] = useState(false);
    const [selectedItem, setSelectedItem] = useState(0);
    const [clickedItem, setClickedItem] = useState({});

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        selectedFlatRows,
        allColumns,
    } = useTable(
        {
            columns,
            data,
            initialState: {
                pageIndex: 0,
                pageSize: 10,
            },
            manualPagination: true,
            pageCount: controlledPageCount,
        },
        useExpanded,
        usePagination,
        useRowSelect,
    );

    useEffect(() => {
        if (setSelectedItems) {
            setSelectedItems(
                selectedFlatRows?.map((a) => {
                    return a.original.id;
                }),
            );
        }

        setClickedItem(
            selectedFlatRows?.map((a) => {
                return a.original;
            }),
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setSelectedItems, selectedFlatRows]);

    const showOptions = (item: any) => {
        setClickedItem(item);
        setExposeClickedItem(item);
    };

    return (
        <section className="h-full ">
            <div className="justify-between w-full items-end ">
                <table {...getTableProps()} className="w-full min-w-max">
                    <thead className=" rounded-4xl  min-w-max">
                        {headerGroups.map((headerGroup: any, index) => (
                            <tr
                                key={index}
                                {...headerGroup.getHeaderGroupProps()}
                                onMouseLeave={() => {
                                    setShowMenu(false);
                                }}
                            >
                                {headerGroup.headers.map((column, i) => (
                                    <th
                                        {...column.getHeaderProps()}
                                        className={`py-4 px-3 text-left text-sm text-gray-500  font-poppins min-w-max ${
                                            column.id === 'unitPrice' ? 'text-right' : 'text-left'
                                        }`}
                                        key={i}
                                    >
                                        {column.render('Header')}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map((row, i) => {
                            prepareRow(row);
                            return (
                                <React.Fragment key={i}>
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map((cell, j) => {
                                            return (
                                                <td
                                                    role="presentation"
                                                    key={j}
                                                    {...cell.getCellProps()}
                                                    className={`p-3 text-gray-500   font-poppins ${
                                                        cell.column.id === 'actionColumn' ||
                                                        cell.column.id === 'itemName'
                                                            ? 'text-start'
                                                            : cell.column.id === 'unitPrice'
                                                            ? 'text-right'
                                                            : 'text-left'
                                                    } ${
                                                        cell.column.id === 'itemName'
                                                            ? 'truncate'
                                                            : '' || cell.column.id === 'orderId'
                                                            ? 'text-purple-400 underline'
                                                            : null
                                                    }`}
                                                    onClick={() => {
                                                        if (cell.column.id === 'expander') {
                                                            setSelectedItem(row.original);
                                                        }
                                                        if (cell.column.id === 'transactionId') {
                                                            setExposeClickedItem(row.original);
                                                        }
                                                        if (cell.column.id === 'actionColumn') {
                                                            showOptions(row.original);
                                                        }
                                                    }}
                                                    onMouseLeave={() => {
                                                        if (cell.column.id !== 'actionColumn') {
                                                            setShowMenu(false);
                                                        }
                                                    }}
                                                >
                                                    {cell.render('Cell')}

                                                    {cell.column.id === 'actionColumn' &&
                                                        showMenu &&
                                                        clickedItem === row.original && (
                                                            <div className="absolute right-3 w-48 bg-white rounded-md shadow-xl z-10">
                                                                <ul
                                                                    className="bg-white shadow-md rounded-lg py-2 px-2 text-start"
                                                                    onMouseLeave={() =>
                                                                        setShowMenu(false)
                                                                    }
                                                                ></ul>
                                                            </div>
                                                        )}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                </React.Fragment>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default DataTable;
