const initialState = []

export const myActions = (state = initialState, action) => {
    console.log(state);
    const stateCopy = [...state]
    switch (action.type) {
        case "ADD": stateCopy.push(action.payload)
            return stateCopy
        case "DELETE": stateCopy.splice(action.payload, 1)
            return stateCopy
        case "UPD": stateCopy.splice(action.ind, 1, action.payload)
            return stateCopy
        default: return initialState
    }
}