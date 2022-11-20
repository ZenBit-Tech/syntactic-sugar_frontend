import { render } from "@testing-library/react";

import ProfilePage from "./profile-page";

describe("ProfilePage", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<ProfilePage />);
		expect(baseElement).toBeTruthy();
	});
});
