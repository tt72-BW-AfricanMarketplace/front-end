import React from 'react'
import styled, { css } from 'styled-components';
import theme from "styled-theming";
// import Loader from './Loader';
import PropTypes from "prop-types";
import { Link as RouteLink } from "react-router-dom";
import { buildGeneral } from "../generators";

const defaultLink = css`
	background-color: var(--tPrimary);
	color: var(--white);
	&:hover {
		cursor: pointer;
		background-color: var(--tDarkAlt);
	}
	&:active {
		background-color: var(--tDark);
	}
`;
const inverseLink = css`
	background-color: var(--white);
	color: var(--tPrimary);
	&:hover {
		cursor: pointer;
		background-color: var(--pLighter);
	}
	&:active {
		background-color: var(--pDark);
	}
`;

const linkThemes = theme.variants("mode", "variant", {
	default: buildGeneral(defaultLink),
	inverse: buildGeneral(inverseLink),
});

const StyledLink = styled(RouteLink)`
	${linkThemes};
	display: inline-flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
	height: 5rem;
	width: 15rem;
	/* text-align: center; */
	margin: 0 1rem;
	/* padding: 1rem; */
	/* padding: 6px 12px; */
	white-space: nowrap;
	line-height: normal;
	text-decoration: none;
	font-size: ${props => {
		if (props.big) {
			return '2rem';
		}
		return '1.6rem';
	}};
	outline: none;
	border: none;
	cursor: pointer;
`;

StyledLink.propTypes = {
	variant: PropTypes.oneOf(["default", "inverse"])
};

StyledLink.defaultProps = {
	variant: "default",
};



const Link = ({ children, ...props }) => {
	return (
		<StyledLink {...props}>
			{children}
		</StyledLink>
	)
}

export default Link;