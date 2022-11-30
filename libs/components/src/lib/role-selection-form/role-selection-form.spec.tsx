import { render } from "@testing-library/react";

import RoleSelection from "./role-selection-form";

describe("RoleSelection", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<RoleSelection />);
		expect(baseElement).toBeTruthy();
	});
});
