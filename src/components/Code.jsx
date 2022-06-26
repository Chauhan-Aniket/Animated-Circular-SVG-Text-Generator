import React from "react";
import styled from "styled-components";

const CodeSection = styled.section`
	padding: 1rem;
	color: #efefef;
	background: #2c2c2c;
	height: 450px;
	font-size: 0.75rem;
	font-family: "Courier New", Courier, monospace;
	line-height: 2;
	letter-spacing: 0.1px;
	overflow-y: scroll;
	white-space: pre-wrap;
	white-space: -moz-pre-wrap;
	white-space: -pre-wrap;
	white-space: -o-pre-wrap;
	word-wrap: break-word;
	border-radius: 0.7rem;
`;

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
    <path
      d="M0, 200a200, 200 0 1, 0 400, 0a200, 200 0 1, 0 -400, 0"
      id="txt-path"
    />
  </defs>
  <text
    fill="${props.color}"
    font-size="${props.size}"
    font-weight="${props.isBold ? "bold" : "regular"}"
    font-style="${props.isItalic ? "italic" : "normal"}"
    text-decoration="${
			props.isStrikethrough && props.isOverline
				? "line-through overline"
				: "normal" && props.isStrikethrough
				? "line-through"
				: "normal" && props.isOverline
				? "overline"
				: "normal"
		}"
    letter-spacing="${props.textSpace}"
  >
    <textPath id="textPath" startOffset="0" xlink:href="#txt-path">
      ${props.text || "Circular SVG Text Generator"}
    </textPath>
  </text>
</svg>`;

	return (
		<>
			<CodeSection>{svgCode}</CodeSection>
		</>
	);
};

export default Code;
