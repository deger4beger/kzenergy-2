import s from "./index.module.scss"
import cn from "classnames"
import React from "react"

interface Props {
	onClick: (e: React.MouseEvent<HTMLDivElement>) => void,
	className?: any
}

const CrossBtn: React.FC<Props> = ({
	onClick,
	className
}) => <span className={cn(s.wrapper, className)} onClick={onClick}/>

export default CrossBtn