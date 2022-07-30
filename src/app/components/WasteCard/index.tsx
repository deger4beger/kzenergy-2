import { WasteQantity } from "types/waste"
import s from "./index.module.scss"


const WasteCard: React.FC<{
	waste: WasteQantity
}> = ({ waste }) => {

	return (
		<div className={s.wrapper}>
			{ waste.name }
		</div>
	)

}

export default WasteCard