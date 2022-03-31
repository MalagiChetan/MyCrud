import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addition } from '../action/action'

function Input(props) {
    const [input, setInput] = useState({
        userName: '',
        email: '',
        contactNo: '',
        comp: '',
        salary: '',
    })

    const dispatch = useDispatch()


    const handleChange = (e) => {
        const inputCopy = { ...input }
        inputCopy[e.target.name] = e.target.value;
        setInput(inputCopy)
    }

    const addData = () => {
        dispatch(addition(input))
        props.history.push('/table-display')
    }
    return (
        <div className="App" >
            <div className='cont'>
                <label htmlFor='userName'>User Name</label>
                <input name='userName' type='text' value={input.userName} onChange={(e) => { handleChange(e) }} />
                <br /> <br />
                <label htmlFor='userName'>Email</label>
                <input name='email' type='email' value={input.email} onChange={(e) => { handleChange(e) }} />
                <br /> <br />
                <label htmlFor='contactNo'>Contact No.</label>
                <input name='contactNo' type='number' value={input.contactNo} onChange={(e) => { handleChange(e) }} />
                <br /> <br />
                <label htmlFor='comp'>Company Name</label>
                <input name='comp' type='text' value={input.comp} onChange={(e) => { handleChange(e) }} />
                <br /> <br />
                <label htmlFor='salary'>Salary</label>
                <input name='salary' type='number' min='6000000000' max='9999999999' value={input.salary} onChange={(e) => { handleChange(e) }} />
                <br /> <br />
                <Button variant="contained" onClick={() => { addData() }}>Add Data</Button>
            </div>
        </div>
    )
}

export default Input