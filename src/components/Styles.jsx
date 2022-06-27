import styled from "styled-components";

const darkColor = "#202020";
const blurColor = `${darkColor}cf`;
const darkGrayColor = "#2c2c2c";
const lightGrayColor = "#aaa";
const lightColor = "#efefef";
const blueColor = "#0D99FF";
const transition = "300ms ease-in-out";

// SVG
export const SvgContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	width: 100%;
	overflow: hidden;
	@media screen and (max-width: 672px) {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		pointer-events: none;
	}

	@media screen and (min-width: 1400px) {
		width: calc(100% - 25vw);
	}
`;

export const SVG = styled.svg`
	width: 200px;
	border-radius: 50%;
	transform: scale(${(props) => props.scale});
	z-index: -1;
	@media screen and (min-width: 1400px) {
		width: 15vw;
	}
`;
// SVG

// Setting Styled Component
export const Container = styled.div`
	position: relative;
	height: 100vh;
	max-width: 340px;
	width: 100%;
	z-index: 1;
	@media screen and (min-width: 1400px) {
		max-width: calc(100% - 75vw);
	}
`;

export const Content = styled.div`
	padding: 2rem 1.5rem;
	position: absolute;
	bottom: 0;
	left: 0;
	height: calc(100% - 75px);
	width: 100%;
	background: ${darkColor};
	backdrop-filter: blur(5px);
	border-top-right-radius: 1rem;
	transition: ${transition};
	overflow-y: scroll;

	@media screen and (max-width: 672px) {
		background: ${blurColor};
	}

	@media screen and (min-width: 1400px) {
		padding: 2vw 1.5vw;
	}
`;
// Setting Styled Component

export const ToggleBtn = styled.input.attrs({ type: "checkbox" })`
	display: none;
	pointer-events: none;
	&:checked ~ #contentSection {
		left: -100%;
		@media screen and (min-width: 672px) {
			left: 0;
		}
	}
	& + label div svg {
		transition: ${transition};
	}
	&:checked + label div svg {
		transform: rotate(540deg);
	}
`;

export const RangeSlider = styled.input.attrs({ type: "range" })`
	appearance: none;
	outline: 0;
	margin-bottom: 1.5rem;
	background: ${darkGrayColor};
	width: 100%;
	height: 0.5rem;
	border-radius: 30px;

	::-webkit-slider-thumb {
		position: relative;
		appearance: none;
		background: ${blueColor};
		width: 1rem;
		height: 1rem;
		border-radius: 0.1rem;
		cursor: pointer;
		transition: ${transition};
	}
	::-webkit-slider-thumb:active {
		transform: scale(1.5);
	}
	::-webkit-slider-thumb:hover {
		background: rgba(${blueColor}, 0.75);
	}

	@media screen and (min-width: 1400px) {
		margin-bottom: 2.5vw;
		height: 0.5vw;
		::-webkit-slider-thumb {
			width: 1.1vw;
			height: 1.1vw;
			border-radius: 0.15vw;
		}
	}
`;

const fixedClipboard = {
	position: "fixed",
	top: 40,
	right: 32,
	background: blurColor,
	width: "30px",
};

export const IconBg = styled.div`
	display: grid;
	place-items: center;
	background: ${(props) =>
		props.toggle ? `${darkGrayColor}` : `${darkColor}`};
	width: ${(props) => (props.primary ? "60px" : "35px")};
	height: 35px;
	border-radius: 0.2rem;
	cursor: pointer;
	${(props) => (props.fixed ? fixedClipboard : {})}

	@media screen and (min-width: 1400px) {
		width: ${(props) => (props.primary ? "4.75vw" : "2.75vw")};
		height: 2.75vw;
		border-radius: 0.3vw;
		${(props) =>
			props.fixed ? { top: "5vh", right: "2vw", width: "2.25vw" } : {}}
	}
`;

export const Input = styled.input`
	outline: none;
	border: none;
	margin-bottom: 1.5rem;
	padding: 1.2rem 1rem;
	width: 100%;
	background: ${darkGrayColor};
	color: ${lightColor};
	font-size: 0.9rem;
	letter-spacing: 1px;
	text-transform: capitalize;
	border-radius: 0.4rem;
	::placeholder {
		color: ${lightGrayColor};
		font-weight: 200;
	}
	@media screen and (min-width: 1400px) {
		margin-bottom: 2.15vw;
		padding: calc(2vw - 0.55em) calc(2vw - 0.75em);
		font-size: 1vw;
		border-radius: 0.4vw;
	}
`;

export const Label = styled.label`
	display: ${(props) => (props.toggle ? "none" : "inline-block")};
	margin: ${(props) => (props.toggle ? "1rem" : 0)};
	margin-bottom: ${(props) => (props.icon ? 0 : "0.75rem")};
	color: ${lightColor};
	font-size: 0.95rem;
	letter-spacing: 0.25px;
	cursor: pointer;

	& > div {
		transition: ${transition};
		& > svg {
			width: 20px;
			height: 20px;
		}
	}

	@media screen and (max-width: 672px) {
		display: inline-block;
	}

	@media screen and (min-width: 1400px) {
		margin: ${(props) => (props.toggle ? "1vw" : 0)};
		margin-bottom: ${(props) => (props.icon ? 0 : "1.5vw")};
		font-size: 1.2vw;
		letter-spacing: 0.45px;
		& > div svg {
			width: 1.75vw;
			height: 1.75vw;
		}
	}
`;

export const CheckStyle = styled.input.attrs({ type: "checkbox" })`
	display: none;
	:checked + label div {
		background: ${blueColor};
	}
`;

export const ColorInput = styled.input.attrs({ type: "color" })`
	-webkit-appearance: none;
	appearance: none;
	width: 100%;
	height: 100%;
	border: 0;
	padding: 0;
	overflow: hidden;
	border-radius: 0.2rem;
	cursor: pointer;
	::-webkit-color-swatch-wrapper {
		padding: 0;
	}
	::-webkit-color-swatch {
		border: none;
	}
	@media screen and (min-width: 1400px) {
		border-radius: 0.25vw;
	}
`;

export const BoxIcon = styled.div`
	display: grid;
	grid-auto-flow: column;
	grid-gap: 0.7rem;
	@media screen and (min-width: 1400px) {
		grid-gap: 0.7vw;
	}
`;

export const StyleContainer = styled.div`
	display: block;
	margin-bottom: 1.5rem;
	padding: 0.7rem;
	width: fit-content;
	background: ${darkGrayColor};
	border-radius: 0.4rem;
	@media screen and (min-width: 1400px) {
		margin-bottom: 2vw;
		padding: 0.75vw;
		border-radius: 0.4vw;
	}
`;

export const StyleContent = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
`;

export const CodeSection = styled.section`
	position: relative;
	color: ${lightColor};
	background: ${darkGrayColor};
	height: 460px;
	font-size: 0.75rem;
	font-family: "Courier New", Courier, monospace;
	letter-spacing: 0.5px;
	overflow-y: scroll;
	border-radius: 0.5rem;
	& > div button {
		display: grid;
		place-items: center;
		border: none;
		color: ${lightColor};
		background: transparent;
		cursor: pointer;

		& > svg {
			width: 20px;
			height: 20px;
		}
	}
	@media screen and (min-width: 1400px) {
		font-size: 0.85vw;
		height: calc(75vh - 40px);

		& > div button {
			& > svg {
				width: 1.35vw;
				height: 1.35vw;
			}
		}
	}
`;

export const BtnTab = styled.p`
	position: absolute;
	bottom: 25px;
	left: 25px;
	padding: 0.8rem;
	width: 120px;
	color: #efefef;
	display: grid;
	place-items: center;
	font-size: 0.9rem;
	border-radius: 0.5rem;
	letter-spacing: 0.5px;
	text-transform: uppercase;
	background: ${(props) =>
		props.className === "tab-list-item tab-list-active"
			? "#0d99ff"
			: "#2c2c2c"};
	cursor: pointer;

	& + P {
		left: 190px;
	}

	@media screen and (min-width: 1400px) {
		bottom: calc(2.5vw);
		left: 1.5vw;
		padding: 1vw;
		font-size: 1.05vw;
		width: 9vw;

		& + P {
			left: calc(100% - 10.5vw);
		}
	}
`;
