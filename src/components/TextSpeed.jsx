import React from "react";
import { RangeSlider, Label } from "./Styles";

const SliderInput = (props) => {
	return (
		<>
			<Label htmlFor="textSpeed">Speed</Label>
			<RangeSlider
				id="textSpeed"
				min={-7}
				max={1}
				step={1}
				onChange={props.speedSlider}
				value={props.speed}
			/>
		</>
	);
};

export default SliderInput;
