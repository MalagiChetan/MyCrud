import { Button } from '@mui/material';
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {updateData} from '../action/action'

function ModalData(props) {

    const [show, setShow] = useState(false);
    const [newDetail, setNewDetail] = useState({
        userName: '',
        email: '',
        contactNo: '',
        comp: '',
        salary: '',
    })

    const { i } = props

    console.log(props);
    const dispatch = useDispatch()

    const handleClose = () => setShow(false);

    const handleShow = () => {
        setNewDetail({
            userName: props.value.userName,
            email: props.value.email,
            contactNo: props.value.contactNo,
            comp: props.value.comp,
            salary: props.value.salary
        })
        setShow(true)
    }

    const handleChange = (e) => {
        const newDetailCopy = { ...newDetail }
        newDetailCopy[e.target.name] = e.target.value
        setNewDetail(newDetailCopy)
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Update
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Student Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <label htmlFor='userName'>User Name</label>
                        <input name='userName' type='text' value={newDetail.userName} onChange={(e) => { handleChange(e) }} />
                        <br /> <br />
                        <label htmlFor='userName'>Email</label>
                        <input name='email' type='email' value={newDetail.email} onChange={(e) => { handleChange(e) }} />
                        <br /> <br />
                        <label htmlFor='contactNo'>Contact No.</label>
                        <input name='contactNo' type='number' value={newDetail.contactNo} onChange={(e) => { handleChange(e) }} />
                        <br /> <br />
                        <label htmlFor='comp'>Company Name</label>
                        <input name='comp' type='text' value={newDetail.comp} onChange={(e) => { handleChange(e) }} />
                        <br /> <br />
                        <label htmlFor='salary'>Salary</label>
                        <input name='salary' type='number' value={newDetail.salary} min='6000000000' max='9999999999' onChange={(e) => { handleChange(e) }} />
                        <br /> <br />
                    </div >
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => { dispatch(updateData(newDetail, i)); setShow(false) }}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalData