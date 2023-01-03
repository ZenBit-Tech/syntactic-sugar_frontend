import { render } from "@testing-library/react";

import EditJob from "./edit-job";

describe("EditJob", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<EditJob />);
		expect(baseElement).toBeTruthy();
	});
});
