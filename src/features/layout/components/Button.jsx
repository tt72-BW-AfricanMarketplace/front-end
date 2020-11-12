import React from 'react'
import styled, { css } from 'styled-components';
import theme from "styled-theming";
import Loader from './Loader';
import PropTypes from "prop-types";

const buttonColors = theme.variants("mode", "variant", {
	default: {
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
	},
	inverse: {
		dark: css`
			background-color: var(--white);
			color: var(--tPrimary);
			&:hover {
				cursor: pointer;
				background-color: var(--pLighter);
			}
			&:active {
				background-color: var(--pDark);
			}
		`,
		light: css`
			background-color: var(--white);
			color: var(--tPrimary);
			&:hover {
				cursor: pointer;
				background-color: var(--pLighter);
			}
			&:active {
				background-color: var(--pDark);
			}
		`,
	}
});

const StyButton = styled.button`
	${buttonColors};
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	padding: 6px 12px;
	font-size: ${props => {
		if (props.big) {
			return '2rem';
		}
		return '1.6rem';
	}};
	outline: none;
	border: none;
	cursor: pointer;
	margin: 1.5rem;
`;

StyButton.propTypes = {
	variant: PropTypes.oneOf(["default", "inverse"])
};

StyButton.defaultProps = {
	variant: "default",
};

const Button = ({ variant, secondary, big, inverse, loading, children, ...props }) => {
	return (
		<StyButton variant={variant} secondary={secondary} big={big} inverse={inverse} {...props}>
			{loading ? <Loader small white /> : children}
		</StyButton>
	)
}

export default Button;