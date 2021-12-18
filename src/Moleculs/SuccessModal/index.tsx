import React from 'react'
import Modal from 'antd/lib/modal/Modal'
import { useSelector, useDispatch } from 'react-redux'
import { getSuccessModalStatus } from '../../Store/selector'
import { setSuccessModal } from '../../Store/mainSlice'

const SuccessModal:React.FC = () => {
    const dispatch = useDispatch()
    const {status, name} = useSelector(getSuccessModalStatus)

    const handleHide = () => {
        dispatch(setSuccessModal({status: false, name: ''}))
        }
        
    return (
        <>
            <Modal
                    title="Timer Finished"
                    onOk={handleHide}
                    onCancel={handleHide}
                    visible={status}>
                        {name} has been canceled

            </Modal>
        </>
    )
}

export default SuccessModal
