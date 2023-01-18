import { render } from "@testing-library/react";

import StyledFileField from "./styled-file-field";

describe("StyledFileField", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<StyledFileField />);
		expect(baseElement).toBeTruthy();
	});
});
