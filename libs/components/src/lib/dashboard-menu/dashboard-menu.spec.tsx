import { render } from "@testing-library/react";

import DashboardMenu from "./dashboard-menu";

describe("DashboardMenu", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<DashboardMenu />);
		expect(baseElement).toBeTruthy();
	});
});
