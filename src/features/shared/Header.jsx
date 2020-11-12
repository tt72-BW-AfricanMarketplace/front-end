import React from "react";
import ThemeToggler from "./ThemeToggler";
import styled from "styled-components";
import components from "../layout";

const { Heading, Button } = components;

// const headerStyles = theme("mode",
// 	createBackgroundStyles(prussianblue, honeydew, "black", honeydew)
// );

const StyledHeader = styled.header`
	width: 100vw;
	background-color: var(--pDark);
	color: var(--pText);
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
`;

const Header = props => {
	return (
		<StyledHeader>
			<Heading h1 noMargin>App Title</Heading>
			<Button>Here</Button>
			<ThemeToggler />
		</StyledHeader>
	);
}

export default Header;