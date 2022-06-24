import React from "react";
import {
	IconBold,
	IconItalic,
	IconStrikethrough,
	IconOverline,
} from "@tabler/icons";
import { StyleContainer, BoxIcon, IconBg, Label, CheckStyle } from "./Styles";

const iconColor = "#efefef";

const TextStyle = (props) => {
	return (
		<StyleContainer>
			<BoxIcon>
				<CheckStyle
					id="textBold"
					onChange={(e) => props.boldStyle(e)}
					checked={props.isBold}
				/>
				<Label htmlFor="textBold" icon>
					<IconBg>
						<IconBold color={iconColor} />
					</IconBg>
				</Label>

				<CheckStyle
					id="textItalic"
					onChange={(e) => props.italicStyle(e)}
					checked={props.isItalic}
				/>
				<Label htmlFor="textItalic" icon>
					<IconBg>
						<IconItalic color={iconColor} />
					</IconBg>
				</Label>

				<CheckStyle
					id="textStrikethrough"
					onChange={(e) => props.strikethroughStyle(e)}
					checked={props.isStrikethrough}
				/>
				<Label htmlFor="textStrikethrough" icon>
					<IconBg>
						<IconStrikethrough color={iconColor} />
					</IconBg>
				</Label>

				<CheckStyle
					id="textOverline"
					onChange={(e) => props.overlineStyle(e)}
					checked={props.isOverline}
				/>
				<Label htmlFor="textOverline" icon>
					<IconBg>
						<IconOverline color={iconColor} />
					</IconBg>
				</Label>
			</BoxIcon>
		</StyleContainer>
	);
};

export default TextStyle;
