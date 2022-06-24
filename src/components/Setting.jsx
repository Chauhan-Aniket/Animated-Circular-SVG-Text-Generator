import React, { useRef } from "react";
import TextInput from "./TextInput";
import TextStyle from "./TextStyle";
import TextColor from "./TextColor";
import TextSize from "./TextSize";
import TextSpeed from "./TextSpeed";
import TextRadius from "./TextRadius";
import { IconArrowLeft } from "@tabler/icons";
import {
	Container,
	Content,
	StyleContent,
	ToggleBtn,
	Label,
	IconBg,
} from "./Styles";

const Setting = (props) => {
	const toggleRef = useRef();

	return (
		<Container>
			<ToggleBtn
				id="toggleBtn"
				checked={props.toggle}
				onChange={(e) => {
					// console.log(e.target.checked);
					props.inputToggle(e);
				}}
				ref={toggleRef}
			/>
			<Label htmlFor="toggleBtn" toggle>
				<IconBg>
					<IconArrowLeft color="#efefef" />
				</IconBg>
			</Label>

			<Content id="contentSection">
				<TextInput inputText={props.inputText} text={props.text} />
				<StyleContent>
					<TextStyle
						boldStyle={props.boldStyle}
						isBold={props.isBold}
						italicStyle={props.italicStyle}
						isItalic={props.isItalic}
						strikethroughStyle={props.strikethroughStyle}
						isStrikethrough={props.isStrikethrough}
						overlineStyle={props.overlineStyle}
						isOverline={props.isOverline}
					/>
					<TextColor inputColor={props.inputColor} color={props.color} />
				</StyleContent>
				<TextSize sizeSlider={props.sizeSlider} size={props.size} />
				<TextSpeed speedSlider={props.speedSlider} speed={props.speed} />
				<TextRadius inputSlider={props.inputSlider} radius={props.radius} />
			</Content>
		</Container>
	);
};

export default Setting;

/**
	width: calc(100% - 25vw);
 * 
	export const Container = styled.div`
	position: relative;
	height: 100vh;
	max-width: calc(100% - 75vw);
	width: 100%;
	z-index: 1;
`;
export const Content = styled.div`
	padding: 2vw 1.5vw;
	position: absolute;
	bottom: 0;
	left: 0;
	height: calc(100% - 75px);
	width: 100%;
	background: ${darkColor};
	backdrop-filter: blur(5px);
	border-top-right-radius: 1rem;
	transition: ${transition};

	export const Input = styled.input`
	outline: none;
	border: none;
	margin-bottom: 2rem;
	padding: calc(2vw - 0.5em) calc(2vw - 0.75em);
	font-size: 1vw;
	width: 100%;
	background: ${darkGrayColor};
	color: ${lightColor};
	letter-spacing: 1px;
	text-transform: capitalize;
	border-radius: 0.4rem;
	::placeholder {
		color: ${lightGrayColor};
		font-weight: 200;
	}
`;
 */
