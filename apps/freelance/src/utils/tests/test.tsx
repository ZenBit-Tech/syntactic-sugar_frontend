import React, { ReactElement } from "react";
import { ThemeProvider } from "styled-components";
import { render, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "redux/store";
import { ThemeColors } from "@freelance/components";

const renderWithProviders = ({ children }: { children: React.ReactNode }) => (
	<Provider store={store}>
		<BrowserRouter>
			<ThemeProvider theme={ThemeColors}>{children}</ThemeProvider>
		</BrowserRouter>
	</Provider>
);

export const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
	render(ui, { wrapper: renderWithProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
