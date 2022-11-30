import { createGlobalStyle, css } from "styled-components";

export const ThemeColors = {
	colors: {
		darkRed: "#C91A16",
		lightRed: "#EC3B37",
		blue: "#5184EC",
		darkGrey: "#A0A0A0",
		grey: "#D9D9D9",
		lightGrey: "#F5F5F5",
		white: "#FFFFFF",
		black: "#000000",
	},
};

export const ThemeBackground = {
	signPages: {
		image: `url('/assets/images/top_elipse.png') no-repeat top left,
    url('/assets/images/bottom_elipse.png') no-repeat bottom right`,
	},
};

export const GlobalStyle = createGlobalStyle`${css`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: "Nunito", sans-serif;
	}

	body {
		background: ${ThemeColors.colors.lightGrey};
	}

	button {
		cursor: pointer;
		background: transparent;
		border: none;
	}

	ul,
	ol {
		padding: 0;
		margin: 0;
		list-style: none;
	}

	li {
		list-style: none;
	}

	input {
		outline: none;
	}

	a {
		text-decoration: none;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		margin: 0;
		padding: 0;
	}
`}`;
