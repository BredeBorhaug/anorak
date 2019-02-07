import { CardContent } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import Slider from "@material-ui/lab/Slider"
import React from "react"
import { IDimmableLightProps } from "./IDimmableLightProps"

import classes from "./DimmableLights.scss"

export class DimmableLight extends React.PureComponent<IDimmableLightProps> {
	public setValueOnEvent = (value: number) => () => {
		this.props.onChange(value)
	}
	public sliderChange = (event: any, value: number) => {
		this.props.onChange(value)
	}

	public render() {
		return (
			<Card>
				<CardContent>
					<div className={classes.container}>
						<div className={classes.btn}>
							<Button variant="contained" color="secondary" onClick={this.setValueOnEvent(0)}>Off</Button>
						</div>
						<div className={classes.slider}>
							<Slider style={{width: "300px"}} min={0} max={100} step={1} value={Math.round(this.props.value) % 101} onChange={this.sliderChange}/>
						</div>
						<div className={classes.btn}>
							<Button variant="contained" color="primary" onClick={this.setValueOnEvent(100)}>On</Button>
						</div>
					</div>
				</CardContent>
			</Card>
		)
	}
}
export default DimmableLight
