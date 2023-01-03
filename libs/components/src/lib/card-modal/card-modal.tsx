import { ModalProps } from "antd";
import { StyledCardModal } from "./card-modal.styled";

export const CardModal: React.FC<ModalProps> = ({ children, title, width, open, onCancel }) => {
	return (
		<StyledCardModal
			title={title}
			centered
			open={open}
			onCancel={onCancel}
			width={width}
			footer={null}
		>
			{children}
		</StyledCardModal>
	);
};

export default CardModal;
