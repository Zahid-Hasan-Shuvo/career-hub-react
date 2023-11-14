import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Statistics = () => {
    const data = [
        {
          name: 'Assignment 1',
          marks: 60,
         
          
        },
        {
          name: 'Assignment 2',
          marks: 60,
        },
        {
          name: 'Assignment 3',
          marks: 60,
        },
        {
          name: 'Assignment 4',
          marks: 58,
        },
        {
          name: 'Assignment 5',
          marks: 25,
        },
        {
          name: 'Assignment 6',
          marks: 28,
        },
        {
          name: 'Assignment 7',
          marks: 50,
        },
      ];

    return (
        <div className='mt-24  ml-64'>
             <LineChart
          width={500}
          height={300}
          data={data}
         
        >
          
          <XAxis dataKey="name" height={60}  />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="marks" stroke="#8884d8" />
       
        </LineChart>
        </div>
    );
};

export default Statistics;