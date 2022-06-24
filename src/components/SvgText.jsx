import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SvgContainer, SVG } from "./Styles";

const SvgText = (props) => {
	const pathRef = useRef();

	useEffect(() => {
		gsap.to(pathRef.current, {
			transformOrigin: "center center",
			rotation: "+=360",
			ease: "linear",
			duration: Math.abs(props.speed),
			repeat: -1,
			paused: false,
		});
	});

	return (
		<SvgContainer>
			<SVG
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				version="1.1"
				viewBox="-50 -50 500 500"
				scale={props.radius}
			>
				<defs>
					<path
						d="M0, 200a200, 200 0 1, 0 400, 0a200, 200 0 1, 0 -400, 0"
						id="txt-path"
						ref={pathRef}
					/>
				</defs>
				<text
					id="textProperty"
					fill={props.color}
					fontSize={props.size}
					fontWeight={props.isBold ? "bold" : "regular"}
					fontStyle={props.isItalic ? "Italic" : "normal"}
					textDecoration={
						props.isStrikethrough && props.isOverline
							? "line-through overline"
							: "normal" && props.isStrikethrough
							? "line-through"
							: "normal" && props.isOverline
							? "overline"
							: "normal"
					}
					letterSpacing={props.textSpace}
				>
					<textPath id="textPath" startOffset="0" xlinkHref="#txt-path">
						{props.text || "Circular SVG Text Generator"}
					</textPath>
				</text>
			</SVG>
		</SvgContainer>
	);
};

export default SvgText;
