export const GETDATA = 'GETDATA'

const initialState = {
    courses:[]
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case GETDATA:
    return { ...state, courses:payload }

  default:
    return state
  }
}
