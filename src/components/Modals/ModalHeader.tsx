import { AiOutlineClose } from 'react-icons/ai'

const ModalHeader = ({ setShow, headerTitle, sys }: any) => {
	return (
		<div className={`modal-close  ${sys}`}>
			<h3>{headerTitle}</h3>
			<AiOutlineClose size={25} onClick={() => setShow(false)} className='close-span-icon' />
		</div>
	)
}

export default ModalHeader
