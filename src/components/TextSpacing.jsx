import React from "react";
import { RangeSlider, Label } from "./Styles";

const TextSpacing = (props) => {
	return (
		<>
			<Label>Letter Spacing</Label>
			<RangeSlider
				min={0}
				max={100}
				step={1}
				value={props.textSpace}
				onChange={props.spaceSlider}
			/>
		</>
	);
};

export default TextSpacing;
