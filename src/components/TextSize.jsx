import React from "react";
import { Label, RangeSlider } from "./Styles";

const TextSize = (props) => {
	return (
		<>
			<Label htmlFor="rangeSlider">Size</Label>
			<RangeSlider
				id="rangeSlider"
				value={props.size}
				onChange={props.sizeSlider}
				min={25}
				max={150}
			/>
		</>
	);
};

export default TextSize;
