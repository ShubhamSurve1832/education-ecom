import React from 'react'
import { useState } from 'react';

const TestTable = () => {
    const [showAllRows, setShowAllRows] = useState(false);
    const [buttonText, setButtonText] = useState(false);

    const showContent = () => {
        setShowAllRows(!showAllRows);
        setButtonText(!buttonText);
    };
    const rows = [
        { id: 1, name: 'John', age: 25 },
        { id: 2, name: 'Jane', age: 30 },
        { id: 3, name: 'Bob', age: 40 },
        { id: 4, name: 'Alice', age: 35 },
        { id: 5, name: 'Joe', age: 45 },
    ];
    const visibleRows = showAllRows ? rows : rows.slice(0, 3);  

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {visibleRows.map(row => (
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.name}</td>
                            <td>{row.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            { (
                <button onClick={showContent}>{buttonText ? "Read Less " : "Read More"}</button>
            )}
        </div>
    );
}

export default TestTable