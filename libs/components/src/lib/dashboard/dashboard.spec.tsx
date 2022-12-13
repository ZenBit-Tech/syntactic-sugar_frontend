import { render } from "@testing-library/react";

import Dashboard from "./dashboard";

describe("Dashboard", () => {
	it("should render successfully", () => {
<<<<<<< HEAD
		const { baseElement } = render(<Dashboard />);
=======
		const { baseElement } = render(<Dashboard children={undefined} userRole={"freelancer"} />);
>>>>>>> develop
		expect(baseElement).toBeTruthy();
	});
});
