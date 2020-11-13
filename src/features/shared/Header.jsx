import React from "react";
import ThemeToggler from "./ThemeToggler";
import styled from "styled-components";
import components from "../layout";

const { Heading, Link, Button } = components;

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
	div {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
	}
	nav {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
	}
`;

const Header = props => {
	return (
		<StyledHeader>
			<div>
				<Heading h1 noMargin>App Title</Heading>
			</div>
			<div>
				<nav>
					<Button>Button</Button>
					<Link to="/counter">Counter</Link>
				</nav>
			</div>
			<div>
				<ThemeToggler />
			</div>
		</StyledHeader>
	);
}

export default Header;