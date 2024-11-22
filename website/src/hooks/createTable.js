import React from 'react';
import MuiTableJSX from '../components/common/Table';

function transformData(data) {
    const keys = Object.keys(data);
    const rowCount = data[keys[0]].length;
    const rows = [];

    for (let i = 0; i < rowCount; i++) {
        const row = {};
        keys.forEach(key => {
            row[key] = data[key][i];
        });
        rows.push(row);
    }

    return { headers: keys, rows };
}

export default function TableJSX({ data }) {
    const transformedData = transformData(data);
    return <MuiTableJSX headers={transformedData.headers} rows={transformedData.rows} />;
}