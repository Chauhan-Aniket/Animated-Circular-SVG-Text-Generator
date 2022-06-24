import "./css/App.css";
import { useState } from "react";
import styled from "styled-components";
import SvgText from "./components/SvgText";
import Setting from "./components/Setting";

const Main = styled.main`
	display: flex;
`;

const App = () => {
	const [text, setInput] = useState("");
	const [radius, setRadius] = useState(1);
	const [speed, setSpeed] = useState(-5);
	const [color, setColor] = useState("#0D99FF");
	const [size, setSize] = useState("50");
	const [textSpace, setTextSpace] = useState(0);
	const [toggle, setToggle] = useState(true);
	const [isBold, setBold] = useState(false);
	const [isItalic, setItalic] = useState(false);
	const [isStrikethrough, setStrikethrough] = useState(false);
	const [isOverline, setOverline] = useState(false);

	const inputToggle = (e) => {
		setToggle(e.target.checked);
	};

	const inputText = (e) => {
		setInput(e.target.value);
	};

	const inputColor = (e) => {
		setColor(e.target.value);
	};

	const sizeSlider = (e) => {
		setSize(e.target.value);
	};

	const speedSlider = (e) => {
		setSpeed(e.target.value);
	};

	const inputSlider = (e) => {
		setRadius(e.target.value);
	};

	const spaceSlider = (e) => {
		setTextSpace(e.target.value);
	};

	const boldStyle = (e) => {
		setBold(e.target.checked);
	};
	const italicStyle = (e) => {
		setItalic(e.target.checked);
	};
	const strikethroughStyle = (e) => {
		setStrikethrough(e.target.checked);
	};
	const overlineStyle = (e) => {
		setOverline(e.target.checked);
	};

	return (
		<Main>
			<Setting
				inputText={inputText}
				text={text}
				sizeSlider={sizeSlider}
				size={size}
				inputSlider={inputSlider}
				radius={radius}
				speedSlider={speedSlider}
				speed={speed}
				inputColor={inputColor}
				color={color}
				inputToggle={inputToggle}
				toggle={toggle}
				spaceSlider={spaceSlider}
				textSpace={textSpace}
				boldStyle={boldStyle}
				isBold={isBold}
				italicStyle={italicStyle}
				isItalic={isItalic}
				strikethroughStyle={strikethroughStyle}
				isStrikethrough={isStrikethrough}
				overlineStyle={overlineStyle}
				isOverline={isOverline}
			/>
			<SvgText
				text={text}
				size={size}
				radius={radius}
				color={color}
				speed={speed}
				textSpace={textSpace}
				isBold={isBold}
				isItalic={isItalic}
				isStrikethrough={isStrikethrough}
				isOverline={isOverline}
			/>
		</Main>
	);
};

export default App;
