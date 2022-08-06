import { MeasureSystem } from "types/talon"
import { WasteQantity } from "types/waste"
import cn from "classnames"
import s from "./index.module.scss"


const WasteCard: React.FC<{
	waste: WasteQantity
}> = ({ waste }) => {

	return (
		<div className={cn(s.wrapper, {
			[s.pos]: Object.values(waste.quantity).some(el => el),
			[s.warning]: waste.quantity.тонна > waste.limit
		})}>
			<div className={s.title}>
				{ waste.name }
			</div>
			<div className={s.values}>
				{ Object.entries(waste.quantity).map(([key, value]) =>
					<div>
						<span>{ key === MeasureSystem.M3 ? "м³" : key }:</span>
						<span>
							{ value } { key === MeasureSystem.TON && "/ " + waste.limit }
						</span>
					</div>
				) }
			</div>
		</div>
	)

}

export default WasteCard