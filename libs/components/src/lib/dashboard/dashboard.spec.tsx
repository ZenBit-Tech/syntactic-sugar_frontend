import { render } from "@testing-library/react";

import Dashboard from "./dashboard";

describe("Dashboard", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<Dashboard children={undefined} userRole={"freelancer"} />);
		expect(baseElement).toBeTruthy();
	});
});
