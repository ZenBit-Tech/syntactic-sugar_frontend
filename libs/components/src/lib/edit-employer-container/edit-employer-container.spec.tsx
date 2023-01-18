import { render } from "@testing-library/react";

import EditEmployerContainer from "./edit-employer-container";

describe("EditEmployerContainer", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<EditEmployerContainer />);
		expect(baseElement).toBeTruthy();
	});
});
