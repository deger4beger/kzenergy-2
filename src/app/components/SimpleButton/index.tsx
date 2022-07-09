import s from "./index.module.scss"
import cn from "classnames"

interface Props {
	text: string
	onClick: () => void
	disabled?: boolean
}

const SimpleButton: React.FC<Props> = ({
	text,
	onClick,
	disabled
}) => <div className={cn(s.btn, {
	[s.disabled]: disabled
})} onClick={onClick}>
	{ text }
</div>

export default SimpleButton