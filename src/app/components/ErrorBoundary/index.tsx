import type { ErrorInfo, ReactNode } from "react"
import React, { Component } from "react"
import s from "./index.module.scss"

interface Props {
  children?: ReactNode
}

interface State {
  error: Error | null
  info: ErrorInfo | null
}

class ErrorBoundary extends Component<Props, State> {
  state = {
    error: null,
    info: null,
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    this.setState({ error, info })
  }

  render(): ReactNode {
    const { error } = this.state
    if (error) {
      return (
        <div className={s.wrapper}>
          Some error occured, please refresh the page
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary