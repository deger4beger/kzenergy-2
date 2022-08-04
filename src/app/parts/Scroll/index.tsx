import s from "./index.module.scss"
import React, { useEffect, useState } from 'react'
import { animateScroll as scroll } from "react-scroll"
import { useThrottle } from "app/hooks/throttle"

const Scroll = React.memo(() => {
	const [scrollActive, setScrollActive] = useState(false)

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)
   		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	const handleScroll = useThrottle(() => {
		if (window.pageYOffset > 200) {
			setScrollActive(true)
		} else {
			setScrollActive(false)
		}
	}, 20)

	return (
		<div className={s.wrapper}>
			{scrollActive && <div
				className={s.scroll}
				onClick={() => scroll.scrollToTop({duration: 300})}
				>
				›
			</div>}
		</div>
	)
})

export default Scroll