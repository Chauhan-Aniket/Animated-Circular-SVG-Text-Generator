import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const BtnTab = styled.p`
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
		left: calc(190px);
	}
`;

class Tab extends Component {
	static propTypes = {
		activeTab: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
		onClick: PropTypes.func.isRequired,
	};

	onClick = () => {
		const { label, onClick } = this.props;
		onClick(label);
	};

	render() {
		const {
			onClick,
			props: { activeTab, label },
		} = this;

		let className = "tab-list-item";

		if (activeTab === label) {
			className += " tab-list-active";
		}

		return (
			<BtnTab className={className} onClick={onClick}>
				{label}
			</BtnTab>
		);
	}
}

export default Tab;
