import React from "react"
import DimmableLight from "./device/DimmableLight/DimmableLight"

import { Hassio } from "./api/Hassio"
import "./App.scss"

export class App extends React.PureComponent {
	public hassio = new Hassio("ws://192.168.1.222:8123", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI3MjM1YmE2ZDhkNjA0ZTA1OGQ1M2YzNGU4MTFjNjFiZCIsImlhdCI6MTU0OTU2MDU5NywiZXhwIjoxODY0OTIwNTk3fQ.OAIFfePwJBcHs8XlTkzhHo7cYGGzfCoNyPLeDlF_5EQ")

	public state = {
		dimLightValue: 50
	}

	public constructor(props: any) {
		super(props)
		const anyWindow = window as any
		(anyWindow).app = this
	}

	public stateSetter = (propName: string) => (value: any) => {
		this.setState({[propName]: value})
	}

	public componentDidUpdate() {
		this.hassio.setVolume(this.state.dimLightValue)
	}

	public render() {
		return (
			<>
				<DimmableLight value={this.state.dimLightValue} onChange={this.stateSetter("dimLightValue")}/>
			</>
		)
	}
}

export default App
