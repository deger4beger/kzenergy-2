import Dropdown from "app/components/Dropdown";
import GroupLayout from "app/components/GroupLayout"
import { useGetWasteStatByRepQuery } from "lib/api/stat/index.query";
import { Waste } from "lib/assets/data/waste";
import { useState } from "react";
import {
	LineChart, Line, XAxis, YAxis, CartesianGrid,
	Tooltip, Legend, ResponsiveContainer, ReferenceLine, Brush
} from "recharts"

const fakeData = [
  {
    date: "Дата 1",
    м3: 120,
    тонна: 200,
    штука: 30,
  },
  {
    date: "Дата 1",
    м3: 150,
    тонна: 230,
    штука: 50,
  },
  {
    date: "Дата 1",
    м3: 100,
    тонна: 300,
    штука: 40,
  },
  {
    date: "Дата 1",
    м3: 130,
    тонна: 210,
    штука: 20,
  },
  {
    date: "Дата 1",
    м3: 120,
    тонна: 100,
    штука: 30,
  },
  {
    date: "Дата 1",
    м3: 150,
    тонна: 130,
    штука: 50,
  },
  {
    date: "Дата 1",
    м3: 100,
    тонна: 200,
    штука: 40,
  },
  {
    date: "Дата 1",
    м3: 130,
    тонна: 150,
    штука: 20,
  },
];

const TotalChart = () => {

  const { data, isLoading } = useGetWasteStatByRepQuery()
  const [selectedWaste, setSelectedWaste] = useState<Waste | "Случайные данные">()

  if (isLoading || !data) return <div />

	return (
		<GroupLayout
			title="График количества отходов по месяцам"
      btns={
        <Dropdown
          styles={{ marginBottom: "0", position: "relative", top: "6px" }}
          selected={ selectedWaste }
          setSelected={(waste) => setSelectedWaste(waste as any)}
          options={ [ "Случайные данные", ...Object.keys(data) ] }
        />
      }
		>
			<div style={{ margin: "20px 0 80px" }}>
        { !!selectedWaste && <ResponsiveContainer width="100%" height={500}>
          <LineChart
            width={500}
            height={300}
            data={selectedWaste === "Случайные данные" ? fakeData : data[selectedWaste].info} // fakeData
          >
            <CartesianGrid strokeDasharray="0 0" stroke="#CBCBCB" />
            <XAxis dataKey="date" stroke="black" tickLine={{ strokeWidth: 1 }}
              padding={{ left: 16, right: 16 }}
            />
            <YAxis yAxisId="tonn" stroke="black" tickCount={10} tickSize={10}
              tickLine={{ strokeWidth: 0.5 }}
            />
            <YAxis yAxisId="count" tickCount={6} strokeWidth={0.5} tickSize={6} />
            <YAxis yAxisId="m3" tickCount={6} strokeWidth={0.5} tickSize={6} />
            <Tooltip />
            <Legend iconType="rect" />
            <ReferenceLine y={selectedWaste === "Случайные данные" ? 120 : data[selectedWaste].limit} // 120
              stroke="red"
              yAxisId="tonn"
              strokeDasharray="3 3"
              strokeWidth={2}
              strokeOpacity={0.6}
              alwaysShow
            />
            <Line yAxisId="tonn" type="monotone" dataKey="тонна" stroke="#4769AD"
              dot={{ strokeWidth: 3, r: 4 }}
              strokeWidth={3}
              strokeOpacity={0.8}
            />
            <Line yAxisId="m3" type="monotone" dataKey="м3" stroke="#B43131"
              dot={{ r: 0 }}
              strokeWidth={2}
              strokeOpacity={0.2}
            />
            <Line yAxisId="count" type="monotone" dataKey="штука" stroke="#3AA262"
              dot={{ r: 0 }}
              strokeWidth={2}
              strokeOpacity={0.2}
            />
            {/* <Brush dataKey="date" height={30} /> */}
          </LineChart>
        </ResponsiveContainer> }
        { !selectedWaste && <div style={{
          textAlign: "center",
          fontSize: "var(--fsz18)"
        }}>Выберите отход</div> }
      </div>
		</GroupLayout>
	)

}

export default TotalChart