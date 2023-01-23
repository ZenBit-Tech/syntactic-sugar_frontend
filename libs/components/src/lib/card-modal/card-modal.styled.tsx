import styled from "styled-components";
import { Modal } from "antd";

export const StyledCardModal = styled(Modal)`
	max-height: 90%;
	border-radius: 20px;
	overflow: hidden;
	padding-bottom: 0;

	.ant-modal-body {
		padding: 30px 40px;
	}
`;
