import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "redux/store";

import App from "./app";

describe("App", () => {
	it("should render successfully", () => {
		const { baseElement } = render(
			<Provider store={store}>
				{/* <BrowserRouter> */}
					<App />
				{/* </BrowserRouter> */}
			</Provider>
		);

		expect(baseElement).toBeTruthy();
	});
});
