import GroupLayout from "app/components/GroupLayout"
import {
	XAxis, YAxis, CartesianGrid,
	Tooltip, Legend, ResponsiveContainer, Bar, BarChart
} from "recharts"

const data = [
  {
    name: "Дата 1",
    м3: 20,
    тонна: 200,
    штука: 30,
  },
  {
    name: "Дата 2",
    м3: 50,
    тонна: 230,
    штука: 50,
  },
  {
    name: "Дата 3",
    м3: 10,
    тонна: 300,
    штука: 40,
  },
  {
    name: "Дата 4",
    м3: 30,
    тонна: 210,
    штука: 20,
  },
  {
    name: "Дата 5",
    м3: 20,
    тонна: 200,
    штука: 30,
  },
  {
    name: "Дата 6",
    м3: 50,
    тонна: 230,
    штука: 50,
  },
  {
    name: "Дата 7",
    м3: 10,
    тонна: 300,
    штука: 40,
  },
  {
    name: "Дата 8",
    м3: 30,
    тонна: 210,
    штука: 20,
  },
  {
    name: "Дата 9",
    м3: 30,
    тонна: 210,
    штука: 20,
  },
  {
    name: "Дата 10",
    м3: 10,
    тонна: 300,
    штука: 40,
  },
  {
    name: "Дата 1",
    м3: 12,
    тонна: 200,
    штука: 30,
  },
  {
    name: "Дата 2",
    м3: 15,
    тонна: 230,
    штука: 50,
  },
  {
    name: "Дата 3",
    м3: 10,
    тонна: 300,
    штука: 40,
  },
  {
    name: "Дата 4",
    м3: 13,
    тонна: 210,
    штука: 20,
  },
  {
    name: "Дата 5",
    м3: 12,
    тонна: 200,
    штука: 30,
  },
  {
    name: "Дата 6",
    м3: 15,
    тонна: 230,
    штука: 50,
  },
  {
    name: "Дата 7",
    м3: 10,
    тонна: 300,
    штука: 40,
  },
  {
    name: "Дата 8",
    м3: 13,
    тонна: 210,
    штука: 20,
  },
  {
    name: "Дата 9",
    м3: 30,
    тонна: 210,
    штука: 20,
  },
  {
    name: "Дата 10",
    м3: 10,
    тонна: 300,
    штука: 40,
  }
];

const WasteComparisonChart = () => {

	return (
		<GroupLayout
			title="Какой-то график"
		>
			<div style={{ margin: "20px 0 60px" }}>
        <ResponsiveContainer width="100%" height={500}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="tonn" />
            <YAxis yAxisId="m3" />
            <YAxis yAxisId="count" />
            <Tooltip />
            <Legend />
            <Bar dataKey="м3" fill="#6F88BB" yAxisId="m3" />
            <Bar dataKey="тонна" fill="#CC8989" yAxisId="tonn" />
            <Bar dataKey="штука" fill="#77C295" yAxisId="count" />
          </BarChart>
        </ResponsiveContainer>
      </div>
		</GroupLayout>
	)

}

export default WasteComparisonChart