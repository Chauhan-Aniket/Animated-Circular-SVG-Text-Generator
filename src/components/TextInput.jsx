import React from "react";
import { Input } from "./Styles";

const TextInput = (props) => {
	return (
		<>
			<Input
				placeholder="Enter Text Here"
				onChange={props.inputText}
				value={props.text}
			/>
		</>
	);
};

export default TextInput;
