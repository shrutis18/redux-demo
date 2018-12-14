
const initialState = {
    name : "BOB"
}

export const reducer = (state = initialState, action) => {

switch(action.type) {
    case "UPDATE" :{
    return {
        ...state,
        name : state.name = action.name
    }
    }
    default:
    return state;
}
}
