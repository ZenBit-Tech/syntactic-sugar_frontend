import { render } from "@testing-library/react";

import InvitationCard from "./invitation-card";

describe("InvitationCard", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<InvitationCard />);
		expect(baseElement).toBeTruthy();
	});
});
