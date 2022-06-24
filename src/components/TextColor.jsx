import React from "react";
import { StyleContainer, IconBg, ColorInput } from "./Styles";

const TextColor = (props) => {
	return (
		<>
			<StyleContainer>
				<IconBg primary>
					<ColorInput value={props.color} onChange={props.inputColor} />
				</IconBg>
			</StyleContainer>
		</>
	);
};

export default TextColor;
