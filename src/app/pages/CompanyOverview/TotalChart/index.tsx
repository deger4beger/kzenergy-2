import GroupLayout from "app/components/GroupLayout"
import {
	LineChart, Line, XAxis, YAxis, CartesianGrid,
	Tooltip, Legend, ResponsiveContainer
} from "recharts"

const data = [
  {
    name: "Дата 1",
    м3: 120,
    тонна: 200,
    штука: 30,
  },
  {
    name: "Дата 2",
    м3: 150,
    тонна: 230,
    штука: 50,
  },
  {
    name: "Дата 3",
    м3: 100,
    тонна: 300,
    штука: 40,
  },
  {
    name: "Дата 4",
    м3: 130,
    тонна: 210,
    штука: 20,
  },
  {
    name: "Дата 5",
    м3: 120,
    тонна: 200,
    штука: 30,
  },
  {
    name: "Дата 6",
    м3: 150,
    тонна: 230,
    штука: 50,
  },
  {
    name: "Дата 7",
    м3: 100,
    тонна: 300,
    штука: 40,
  },
  {
    name: "Дата 8",
    м3: 130,
    тонна: 210,
    штука: 20,
  },
];

const TotalChart = () => {

	return (
		<GroupLayout
			title="Суммарное количество отходов по месяцам"
		>
			<div style={{ margin: "20px 0 60px" }}>
        <ResponsiveContainer width="100%" height={500}>
          <LineChart
            width={500}
            height={300}
            data={data}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="tonn" />
            <YAxis yAxisId="m3" />
            <YAxis yAxisId="count" />
            <Tooltip />
            <Legend />
            <Line yAxisId="tonn" type="monotone" dataKey="м3" stroke="#4769AD" />
            <Line yAxisId="m3" type="monotone" dataKey="тонна" stroke="#3AA262" />
            <Line yAxisId="count" type="monotone" dataKey="штука" stroke="#B43131" />
          </LineChart>
        </ResponsiveContainer>
      </div>
		</GroupLayout>
	)

}

export default TotalChart