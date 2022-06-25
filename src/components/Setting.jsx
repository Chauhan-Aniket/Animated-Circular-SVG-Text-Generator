import React, { useRef } from "react";
import TextInput from "./TextInput";
import TextStyle from "./TextStyle";
import TextColor from "./TextColor";
import TextSize from "./TextSize";
import TextSpeed from "./TextSpeed";
import TextRadius from "./TextRadius";
import TextSpacing from "./TextSpacing";
import { IconArrowLeft } from "@tabler/icons";
import {
	Container,
	Content,
	StyleContent,
	ToggleBtn,
	Label,
	IconBg,
} from "./Styles";
import Tabs from "./Tabs";

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
				<Tabs>
					<div label="Customize">
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
						<TextSpacing
							spaceSlider={props.spaceSlider}
							textSpace={props.textSpace}
						/>
					</div>
					<div label="Code">
						After 'while, <em>Crocodile</em>!
					</div>
				</Tabs>
			</Content>
		</Container>
	);
};

export default Setting;
