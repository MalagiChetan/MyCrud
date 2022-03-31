const addition = (inp) => {
    return {
        type: 'ADD',
        payload: inp,
    }
}

const Delete = (ind) => {
    return {
        type: 'DELETE',
        payload: ind,
    }
}

const updateData = (inp, i) => {
    return {
        type: 'UPD',
        payload: inp,
        ind: i,
    }
}

export { addition, Delete, updateData }