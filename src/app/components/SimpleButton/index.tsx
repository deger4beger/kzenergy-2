import s from "./index.module.scss"

interface Props {
	text: string
	onClick: () => void
}

const SimpleButton: React.FC<Props> = ({
	text,
	onClick
}) => <div className={s.btn} onClick={onClick}>
	{ text }
</div>

export default SimpleButton