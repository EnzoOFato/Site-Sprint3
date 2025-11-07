import React from 'react';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';


const data = [
  { name: 'Não assiste futebol feminino', value: 59 },
  { name: 'Assiste só o clube do coração', value: 21 },
  { name: 'Assiste ao máximo que consegue', value: 17 },
  { name: 'Outros / Não sabe', value: 3 },
];


const COLORS = [
  '#db3cacff',
  '#ec4899',
  '#6d28d9',
  '#9982e9ff',
];

export default function Grafico() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <ResponsiveContainer width="110%" height={250}>
        <PieChart>

          <Tooltip
            formatter={(value) => `${value}%`}
            wrapperClassName="rounded-md border bg-black shadow-sm"
            contentStyle={{
              backgroundColor: 'white',
              borderRadius: '0.375rem',
              border: '1px solid #e5e7eb',
            }}
            labelStyle={{ color: '#1f2937' }}
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
      <ul className="mt-4 md:mt-0 lg:mr-0 md:mr-10 space-y-2 text-sm text-nowrap mb-10">
        {data.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: COLORS[index] }}
            ></span>
            {item.name}:<span className="font-bold">{item.value}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}