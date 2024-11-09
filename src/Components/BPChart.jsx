import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const BPChart = ({bpdata}) => {
    return (
        <LineChart width={550} height={200} data={bpdata} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="systolic" stroke="#8884d8" />
            <Line type="monotone" dataKey="diastolic" stroke="#55545d" />
            <CartesianGrid stroke="#fff" strokeDasharray="5 5" />
            <XAxis dataKey="date" />
            <YAxis />
        </LineChart>
    );
};

export default BPChart;
