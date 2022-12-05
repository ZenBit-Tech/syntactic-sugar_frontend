import { render } from "@testing-library/react";

import ModalWindow from "./modal-window";

describe("ModalWindow", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<ModalWindow />);
		expect(baseElement).toBeTruthy();
	});
});
