import { render } from "@testing-library/react";

import EditUserProfile from "./edit-user-profile";

describe("EditUserProfile", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<EditUserProfile />);
		expect(baseElement).toBeTruthy();
	});
});
