import React from "react";
import ThemeToggler from "./ThemeToggler";
import styled from "styled-components";
import layout from "../layout";

const { Heading, Link, Container, Flex } = layout;

// const headerStyles = theme("mode",
// 	createBackgroundStyles(prussianblue, honeydew, "black", honeydew)
// );

const StyledHeader = styled.header`
	width: 100vw;
	background-color: var(--pDark);
	color: var(--pText);
	padding: 0 2rem;
	div.container {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		align-items: center;
	}
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
			<div className="container">
				<div>
					<Heading h1 noMargin>App Title</Heading>
				</div>
				<div>
					<nav>
						<Link to="/">Home</Link>
						<Link to="/counter">Counter</Link>
						<Link to="/login">Login</Link>
					</nav>
				</div>
				<div>
					<ThemeToggler />
				</div>
			</div>
		</StyledHeader>
	);
}

export default Header;