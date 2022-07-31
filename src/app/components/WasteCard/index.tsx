import { MeasureSystem } from "types/talon"
import { WasteQantity } from "types/waste"
import cn from "classnames"
import s from "./index.module.scss"


const WasteCard: React.FC<{
	waste: WasteQantity
}> = ({ waste }) => {

	return (
		<div className={cn(s.wrapper, {
			[s.pos]: Object.values(waste.quantity).some(el => el)
		})}>
			<div className={s.title}>
				{ waste.name }
			</div>
			<div className={s.values}>
				{ Object.entries(waste.quantity).map(([key, value]) =>
					<div>
						<span>{ key === MeasureSystem.M3 ? "м³" : key }:</span>
						<span>{ value }</span>
					</div>
				) }
			</div>
		</div>
	)

}

export default WasteCard