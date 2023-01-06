import { render } from "@testing-library/react";

import ViewProfile from "./view-profile";

describe("ViewProfile", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<ViewProfile />);
		expect(baseElement).toBeTruthy();
	});
});
