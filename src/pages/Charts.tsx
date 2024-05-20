import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function Charts(data: any) {
  const parseDate = (dateString: any) => new Date(dateString);
  const formattedData = data.data.map(([date, sales]: any[]) => {
    const [day, month, year] = date.split("-");
    const formattedDate = `${year}-${month}-${day}`;
    return { date: formattedDate, sales };
  });

  return (
    <LineChart width={900} height={500} data={formattedData}>
      <XAxis
        dataKey="date"
        tickFormatter={(tick) => parseDate(tick).toLocaleDateString()}
        tickCount={5}
      />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip
        labelFormatter={(label) => parseDate(label).toLocaleDateString()}
      />
      <Legend />
      <Line type="monotone" dataKey="sales" stroke="#8884d8" dot={false} />
    </LineChart>
  );
}
