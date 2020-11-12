import React from 'react'
import styled, { css } from 'styled-components';
import theme from "styled-theming";
import { Link as RouteLink } from "react-router-dom";

const linkColors = theme("mode", {
	dark: css`
			background-color: var(--tPrimary);
			color: var(--white);
		&:hover {
			cursor: pointer;
		background-color: var(--tDarkAlt);
		}
		&:active {
			background-color: var(--tDark);
		}
		`,
	light: css`
			background-color: var(--tPrimary);
			color: var(--white);
			&:hover {
				cursor: pointer;
				background-color: var(--tDarkAlt);
			}
			&:active {
				background-color: var(--tDark);
			}
		`,
});


const StyledLink = styled(RouteLink)`
		${linkColors};
		font-family: Arial, Helvetica, sans-serif;
		text-decoration: none;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding: 6px 12px;
		font-size: 16px;
		outline: none;
		border: none;
		cursor: pointer;
		margin: 15px;
	${props => {
		return (
			props.inverse &&
			css`
				background-color: #fff;
				color: #a1cdf1;
			`);
	}};
`;


const Link = ({ children, ...props }) => {
	return (
		<StyledLink {...props}>
			{children}
		</StyledLink>
	)
}

export default Link;