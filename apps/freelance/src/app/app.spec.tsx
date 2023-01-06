import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "redux/store";

import App from "./app";

describe("App", () => {
	it("should render successfully", () => {
		const { baseElement } = render(
			<Provider store={store}>
				<App />
			</Provider>
		);

		expect(baseElement).toBeTruthy();
	});
});
