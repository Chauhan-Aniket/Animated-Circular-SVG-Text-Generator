import React from "react";
import { RangeSlider, Label } from "./Styles";

const TextRadius = (props) => {
	return (
		<>
			<Label htmlFor="textRadius">Radius</Label>
			<RangeSlider
				id="textRadius"
				min={0.2}
				max={2}
				step={0.1}
				onChange={props.inputSlider}
				value={props.radius}
			/>
		</>
	);
};

export default TextRadius;
