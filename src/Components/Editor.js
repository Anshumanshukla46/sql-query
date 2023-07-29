import React, { useState } from 'react';
import "./Editor.css";

const predefinedQueries = [
    {
        name: 'All Employees',
        query: 'select * from employees',
        data: [
            { id: 1, name: 'Anshuman Shukla', age: 21, department: 'Frontend' },
            { id: 2, name: 'Ankit Singh', age: 28, department: 'Finance' },
            { id: 3, name: 'Anjali Gupta', age: 30, department: 'HR' },
            { id: 4, name: 'Krishna Mishra', age: 25, department: 'IT' },
            { id: 5, name: 'Arjun Patel', age: 20, department: 'Marketing' },
        ],
    },
    {
        name: 'Name of Employees',
        query: 'select name,department from employees',
        data: [
            { name: 'Anshuman Shukla', department: 'Frontend' },
            { name: 'Ankit Spartment', department: 'Finance' },
            { name: 'Anjali Gupta', department: 'HR' },
            { name: 'Krishna Mishra', department: 'UI' },
            { name: 'Arjun Patel', department: 'Marketing' },
        ],
    },
];

const Editor = () => {
    const [sqlQuery, setSqlQuery] = useState('');
    const [queryResult, setQueryResult] = useState([]);
    const [selectedColumns, setSelectedColumns] = useState([]);

    const runQuery = () => {
        const result = predefinedQueries.find((q) => q.query === sqlQuery);
        if (result) {
            setQueryResult(result.data);
            setSelectedColumns(getColumnNames(sqlQuery));
        } else {
            setQueryResult([]);
            setSelectedColumns([]);
            alert('Query not found in predefined list.');
        }
    };

    const getColumnNames = (query) => {
        const lowerCaseQuery = query.toLowerCase();
        const matches = lowerCaseQuery.match(/select(.*?)from/);
        if (matches && matches.length > 1) {
            const columnStr = matches[1].trim();
            if (columnStr === '*') {
                return Object.keys(predefinedQueries[0].data[0]);
            }
            return columnStr.split(',').map((column) => column.trim());
        }
        return [];
    };

    const clearQuery = () => {
        setSqlQuery('');
        setQueryResult([]);
        setSelectedColumns([]);
    };

    const handleHistoryQueryClick = (query) => {
        setSqlQuery(query);
    };

    return (
        <div className="app-container">
            <div className="history-container">
                <h2>History</h2>
                <ul className="query-list">
                    {predefinedQueries.map((item) => (
                        <li key={item.name} onClick={() => handleHistoryQueryClick(item.query)}>
                            {item.query}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='main-container'>
                <div className='title-container'>
                    <a href="/" className='home'>Home</a>
                </div>
                <h1 className="app-title">SQL Query Application</h1>
                <div className="query-container">
                    <textarea
                        value={sqlQuery}
                        onChange={(e) => setSqlQuery(e.target.value)}
                        placeholder="Enter your SQL query here..."
                        rows={6}
                        cols={60}
                    />
                    <br />
                    <button className="run-query-button" onClick={runQuery}>Run Query</button>
                    <button className="clear-query-button" onClick={clearQuery}>Clear Query</button>
                </div>
                <div className="result-container">
                    <h2>Query Result</h2>
                    <table className="result-table">
                        <thead>
                            <tr>
                                {selectedColumns.length > 0 ? (
                                    selectedColumns.map((columnName) => <th key={columnName}>{columnName}</th>)
                                ) : (
                                    <th colSpan={selectedColumns.length || 4}>Run Something</th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {queryResult.length > 0 ? (
                                queryResult.map((row, index) => (
                                    <tr key={index}>
                                        {selectedColumns.length > 0 ? (
                                            selectedColumns.map((columnName) => <td key={columnName}>{row[columnName]}</td>)
                                        ) : (
                                            <td colSpan={selectedColumns.length || 4}>No Data Found</td>
                                        )}
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={selectedColumns.length || 4}>No Data Found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Editor;
