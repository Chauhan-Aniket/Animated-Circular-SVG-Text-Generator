import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/esm/styles/prism";
import Clipboard from "react-clipboard.js";
import { IconCopy } from "@tabler/icons";
import { CodeSection, IconBg, clipboardStyle, copySize } from "./Styles";

const Code = (props) => {
	const svgCode = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="-50 -50 500 500" width="${
		props.radius * 200
	}">
    <style>
      svg {
        animation: transform ${Math.abs(props.speed)}s linear infinite;
      }
      @keyframes transform {
        to {
          transform: rotate(360deg);
        }
      }
    </style>
    <defs>
        <path d="M0, 200a200, 200 0 1, 0 400, 0a200, 200 0 1, 0 -400, 0" id="txt-path" />
    </defs>
    <text fill="${props.color}" font-size="${props.size}" font-weight="${
		props.isBold ? "bold" : "regular"
	}" font-style="${props.isItalic ? "italic" : "normal"}" text-decoration="${
		props.isStrikethrough && props.isOverline
			? "line-through overline"
			: "normal" && props.isStrikethrough
			? "line-through"
			: "normal" && props.isOverline
			? "overline"
			: "normal"
	}" letter-spacing="${props.textSpace}">
        <textPath id="textPath" startOffset="0" xlink:href="#txt-path">
          ${props.text || "Circular SVG Text Generator"}
        </textPath>
    </text>
</svg>`;

	return (
		<>
			<CodeSection>
				<SyntaxHighlighter
					language="html"
					style={materialOceanic}
					wrapLongLines={true}
					customStyle={{
						background: "#2c2c2c",
						lineHeight: 1.75,
					}}
					codeTagProps={{
						background: "#2c2c2c",
					}}
				>
					{svgCode}
				</SyntaxHighlighter>
				<IconBg fixed>
					<Clipboard data-clipboard-text={svgCode} style={clipboardStyle}>
						<IconCopy style={copySize} />
					</Clipboard>
				</IconBg>
			</CodeSection>
		</>
	);
};

export default Code;
