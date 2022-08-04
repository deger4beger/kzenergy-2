import { useRef, useCallback } from "react"

export const useThrottle = (callback, delay) => {
	const isThrottled = useRef(false)

	const throttledCallback = useCallback(
		(...args) => {

			if (isThrottled.current) return

			callback(args)
			isThrottled.current = true
			setTimeout(() => isThrottled.current = false, delay)

		},
		[callback, delay],
	)

	return throttledCallback

}