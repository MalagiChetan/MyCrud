import { Button } from '@mui/material'
import React from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Delete } from '../action/action'
import ModalData from './ModalData'

function TableDisplay() {

    const myData = useSelector(state => state)

    const dispatch = useDispatch()
    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Company</th>
                        <th>Salary</th>
                        <th colSpan={2}>Action's</th>
                    </tr>
                </thead>
                <tbody>
                    {myData.map((val, ind) => {
                        return (<tr key={ind}>
                            <td>{val.userName}</td>
                            <td>{val.email}</td>
                            <td>{val.contactNo}</td>
                            <td>{val.comp}</td>
                            <td>{val.salary}</td>
                            <Button variant="contained" onClick={() => { dispatch(Delete(ind)) }}>Delete</Button>
                            <ModalData value={val} i={ind} />
                        </tr>)
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default TableDisplay