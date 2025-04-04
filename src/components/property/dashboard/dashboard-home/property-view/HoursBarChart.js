"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "propiedad A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "propiedad B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "propiedad C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "propiedad D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "propiedad E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "propiedad F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "propiedad G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const HoursBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}>
        <CartesianGrid strokeDasharray="3 3" strokeLeft="transparent" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip cursor={{ fill: "transparent" }} />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default HoursBarChart;
