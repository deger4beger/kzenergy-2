import Dropdown from "app/components/Dropdown";
import GroupLayout from "app/components/GroupLayout"
import { useGetRepStatByWasteQuery } from "lib/api/stat/index.query";
import { useState } from "react";
import {
	XAxis, YAxis, CartesianGrid,
	Tooltip, Legend, ResponsiveContainer, Bar, BarChart, Brush, Line, ComposedChart
} from "recharts"

const fakeData = [
  {
    name: "Отход номер 1",
    м3: 20,
    тонна: 200,
    штука: 30,
  },
  {
    name: "Отход номер 2",
    м3: 50,
    тонна: 230,
    штука: 50,
  },
  {
    name: "Отход номер 3",
    м3: 10,
    тонна: 300,
    штука: 40,
  },
  {
    name: "Отход номер 4",
    м3: 30,
    тонна: 210,
    штука: 20,
  },
  {
    name: "Отход номер 5",
    м3: 20,
    тонна: 200,
    штука: 30,
  },
  {
    name: "Отход номер 6",
    м3: 50,
    тонна: 230,
    штука: 50,
  },
  {
    name: "Отход номер 7",
    м3: 10,
    тонна: 300,
    штука: 40,
  },
  {
    name: "Отход номер 8",
    м3: 30,
    тонна: 210,
    штука: 20,
  },
  {
    name: "Отход номер 9",
    м3: 30,
    тонна: 210,
    штука: 20,
  },
  {
    name: "Отход номер 10",
    м3: 10,
    тонна: 300,
    штука: 40,
  },
  {
    name: "Отход номер 11",
    м3: 12,
    тонна: 200,
    штука: 30,
  },
  {
    name: "Отход номер 12",
    м3: 15,
    тонна: 230,
    штука: 50,
  },
  {
    name: "Отход номер 13",
    м3: 10,
    тонна: 300,
    штука: 40,
  },
  {
    name: "Отход номер 14",
    м3: 13,
    тонна: 210,
    штука: 20,
  },
  {
    name: "Отход номер 15",
    м3: 12,
    тонна: 200,
    штука: 30,
  },
  {
    name: "Отход номер 16",
    м3: 15,
    тонна: 230,
    штука: 50,
  },
  {
    name: "Отход номер 17",
    м3: 10,
    тонна: 300,
    штука: 40,
  },
  {
    name: "Отход номер 18",
    м3: 13,
    тонна: 210,
    штука: 20,
  },
  {
    name: "Отход номер 19",
    м3: 30,
    тонна: 210,
    штука: 20,
  },
  {
    name: "Отход номер 20",
    м3: 10,
    тонна: 300,
    штука: 40,
  },
  {
    name: "Отход номер 21",
    м3: 10,
    тонна: 130,
    штука: 40,
  },
  {
    name: "Отход номер 22",
    м3: 10,
    тонна: 110,
    штука: 40,
  },
  {
    name: "Отход номер 23",
    м3: 10,
    тонна: 90,
    штука: 40,
  },
  {
    name: "Отход номер 24",
    м3: 10,
    тонна: 70,
    штука: 40,
  }
];

const WasteComparisonChart = () => {

  const { data, isLoading } = useGetRepStatByWasteQuery()
  const [selectedReport, setSelectedReport] = useState<string>()

  if (isLoading || !data) return <div />

	return (
		<GroupLayout
			title="Гафик сравнения отходов по месяцам"
      btns={
        <Dropdown
          styles={{ marginBottom: "0", position: "relative", top: "6px" }}
          selected={ selectedReport }
          setSelected={(waste) => setSelectedReport(waste)}
          options={ Object.keys(data) }
        />
      }
		>
			<div style={{ margin: "20px 0 80px" }}>
        { !!selectedReport && <ResponsiveContainer width="100%" height={500}>
          <ComposedChart
            width={500}
            height={300}
            data={[...data[selectedReport]].sort((a, b) => b.тонна - a.тонна)}
          >
            <CartesianGrid strokeDasharray="0 0" stroke="#CBCBCB" />
            <XAxis dataKey="name" stroke="black" tickLine={{ strokeWidth: 0 }}
              padding={{ left: 16, right: 16 }} />
            <YAxis yAxisId="tonn" stroke="black" tickCount={10} tickSize={10}
              tickLine={{ strokeWidth: 0.5 }} />
            <YAxis yAxisId="m3" tickCount={6} strokeWidth={0.5} tickSize={6} />
            <YAxis yAxisId="count" tickCount={6} strokeWidth={0.5} tickSize={6} />
            <Tooltip />
            <Legend />
            <Bar dataKey="м3" fill="#9BB2A2" yAxisId="m3" />
            <Bar dataKey="тонна" fill="#6984BB" yAxisId="tonn"
              // background={{ fill: "var(--bg2)" }}
            />
            <Bar dataKey="штука" fill="var(--errorLight)" yAxisId="count" />
            <Line type="monotone" dataKey="тонна" stroke="black"
              yAxisId="tonn"
              dot={{ strokeWidth: 2, r: 3 }}
              strokeWidth={2}
              strokeOpacity={0.5}
            />
            <Brush dataKey="name" height={30} />
          </ComposedChart>
        </ResponsiveContainer> }
        { !selectedReport && <div style={{
          textAlign: "center",
          fontSize: "var(--fsz18)"
        }}>Выберите дату отчета</div> }
      </div>
		</GroupLayout>
	)

}

export default WasteComparisonChart