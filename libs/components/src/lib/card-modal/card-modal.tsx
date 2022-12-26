import { ModalProps } from 'antd';
import { StyledCardModal } from './card-modal.styled';

const CardModal: React.FC<ModalProps> = ({children, title, open, onCancel }) => {

    return (
        <>
            <StyledCardModal
                title={title}
                centered
                open={open}
                onCancel={onCancel}
                width={1000}
                footer={null}
            >
                {children}
            </StyledCardModal>
        </>
  )
}

export default CardModal;