import styled from "styled-components";
import { ErrorsHandlerWrapper } from "@freelance/components";

export const FirstFormInputWrapper = styled(ErrorsHandlerWrapper)`
	:not(:last-of-type) {
		margin-bottom: 5vh;
	}
`;
