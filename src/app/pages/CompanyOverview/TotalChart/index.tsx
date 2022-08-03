import Dropdown from "app/components/Dropdown";
import GroupLayout from "app/components/GroupLayout"
import { useGetWasteStatByRepQuery } from "lib/api/stat/index.query";
import { Waste } from "lib/assets/data/waste";
import { useState } from "react";
import {
	LineChart, Line, XAxis, YAxis, CartesianGrid,
	Tooltip, Legend, ResponsiveContainer, ReferenceLine
} from "recharts"

const TotalChart = () => {

  const { data, isLoading } = useGetWasteStatByRepQuery()
  const [selectedWaste, setSelectedWaste] = useState<Waste>()

  if (isLoading || !data) return <div />

	return (
		<GroupLayout
			title="Суммарное количество отходов по месяцам"
      btns={
        <Dropdown
          styles={{ marginBottom: "0", position: "relative", top: "6px" }}
          selected={ selectedWaste }
          setSelected={(waste) => setSelectedWaste(waste as Waste)}
          options={ Object.keys(data) }
        />
      }
		>
			<div style={{ margin: "20px 0 200px" }}>
        { !!selectedWaste && <ResponsiveContainer width="100%" height={500}>
          <LineChart
            width={500}
            height={300}
            data={data[selectedWaste].info}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis yAxisId="tonn" />
            <YAxis yAxisId="m3" />
            <YAxis yAxisId="count" />
            <Tooltip />
            <Legend />
            <ReferenceLine y={data[selectedWaste].limit} label="Max" stroke="red" yAxisId="m3" />
            <Line yAxisId="tonn" type="monotone" dataKey="м3" stroke="#4769AD" />
            <Line yAxisId="m3" type="monotone" dataKey="тонна" stroke="#B43131" />
            <Line yAxisId="count" type="monotone" dataKey="штука" stroke="#3AA262" />
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