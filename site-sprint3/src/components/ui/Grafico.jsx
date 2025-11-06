import React from 'react';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';


const data = [
  { name: 'Não assiste futebol feminino', value: 59 },
  { name: 'Assiste só o clube do coração', value: 21 },
  { name: 'Assiste ao máximo que consegue', value: 17 },
  { name: 'Outros / Não sabe', value: 3 },
];


const COLORS = [
  '#eb6060ff', 
  '#ec4899', 
  '#6d28d9', 
  '#9f76ceff', 
];

export default function Grafico() {
  return (
    <ResponsiveContainer width="110%" height={250}>

      <PieChart>

        <Tooltip
          formatter={(value) => `${value}%`}
          wrapperClassName="rounded-md border bg-white shadow-sm"
          contentStyle={{
            backgroundColor: 'white',
            borderRadius: '0.375rem',
            border: '1px solid #e5e7eb',
          }}
          labelStyle={{ color: '#1f2937' }}
        />


        <Legend
          iconType="circle"
          layout="vertical" 
          verticalAlign="middle" 
          align="right" 
          wrapperStyle={{ fontSize: '15px', paddingLeft: '16px' }} 
        />

        <Pie
          data={data}
          dataKey="value"
          nameKey="name"  
          cx="50%"        
          cy="50%"       
          outerRadius={100} 
          innerRadius={0}   
          fill="#8884d8"  
          paddingAngle={2}  
        >

          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}