import { render } from "@testing-library/react";

import EditEmployerForm from "./edit-employer-form";

describe("EditEmployerForm", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<EditEmployerForm />);
		expect(baseElement).toBeTruthy();
	});
});
