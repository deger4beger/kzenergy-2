import GroupLayout from "app/components/GroupLayout"
import {
	XAxis, YAxis, CartesianGrid,
	Tooltip, Legend, ResponsiveContainer, BarChart, Bar
} from "recharts"

const data = [
  {
    name: "Отход 1",
    м3: 120,
    тонна: 200,
    штука: 30,
  },
  {
    name: "Отход 2",
    м3: 150,
    тонна: 230,
    штука: 50,
  },
  {
    name: "Отход 3",
    м3: 100,
    тонна: 300,
    штука: 40,
  },
  {
    name: "Отход 4",
    м3: 130,
    тонна: 210,
    штука: 20,
  },
  {
    name: "Отход 5",
    м3: 120,
    тонна: 200,
    штука: 30,
  },
  {
    name: "Отход 6",
    м3: 150,
    тонна: 230,
    штука: 50,
  },
  {
    name: "Отход 7",
    м3: 100,
    тонна: 300,
    штука: 40,
  },
  {
    name: "Отход 8",
    м3: 130,
    тонна: 210,
    штука: 20,
  },
  {
    name: "Отход 9",
    м3: 130,
    тонна: 210,
    штука: 20,
  },
  {
    name: "Отход 10",
    м3: 100,
    тонна: 300,
    штука: 40,
  },
  {
    name: "Отход 1",
    м3: 120,
    тонна: 200,
    штука: 30,
  },
  {
    name: "Отход 2",
    м3: 150,
    тонна: 230,
    штука: 50,
  },
  {
    name: "Отход 3",
    м3: 100,
    тонна: 300,
    штука: 40,
  },
  {
    name: "Отход 4",
    м3: 130,
    тонна: 210,
    штука: 20,
  },
  {
    name: "Отход 5",
    м3: 120,
    тонна: 200,
    штука: 30,
  },
  {
    name: "Отход 6",
    м3: 150,
    тонна: 230,
    штука: 50,
  },
  {
    name: "Отход 7",
    м3: 100,
    тонна: 300,
    штука: 40,
  },
  {
    name: "Отход 8",
    м3: 130,
    тонна: 210,
    штука: 20,
  },
  {
    name: "Отход 9",
    м3: 130,
    тонна: 210,
    штука: 20,
  },
  {
    name: "Отход 10",
    м3: 100,
    тонна: 300,
    штука: 40,
  },
  {
    name: "Отход 1",
    м3: 120,
    тонна: 200,
    штука: 30,
  },
  {
    name: "Отход 2",
    м3: 150,
    тонна: 230,
    штука: 50,
  },
  {
    name: "Отход 3",
    м3: 100,
    тонна: 300,
    штука: 40,
  },
  {
    name: "Отход 4",
    м3: 130,
    тонна: 210,
    штука: 20,
  },
  {
    name: "Отход 5",
    м3: 120,
    тонна: 200,
    штука: 30,
  },
  {
    name: "Отход 6",
    м3: 150,
    тонна: 230,
    штука: 50,
  },
  {
    name: "Отход 7",
    м3: 100,
    тонна: 300,
    штука: 40,
  },
  {
    name: "Отход 8",
    м3: 130,
    тонна: 210,
    штука: 20,
  },
  {
    name: "Отход 9",
    м3: 130,
    тонна: 210,
    штука: 20,
  },
  {
    name: "Отход 10",
    м3: 100,
    тонна: 300,
    штука: 40,
  },
];

const WasteComparisonChart = () => {

	return (
		<GroupLayout
			title="Суммарное количество отходов по месяцам"
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
            {/*<YAxis yAxisId="tonn" />*/}
            {/*<YAxis yAxisId="count" />*/}
            <YAxis yAxisId="m3" />
            <Tooltip />
            <Legend />
            <Bar dataKey="м3" fill="#6F88BB" yAxisId="m3" />
            {/*<Bar dataKey="тонна" fill="#CC8989" yAxisId="tonn" />
            <Bar dataKey="штука" fill="#77C295" yAxisId="count" />*/}
          </BarChart>
        </ResponsiveContainer>
      </div>
		</GroupLayout>
	)

}

export default WasteComparisonChart