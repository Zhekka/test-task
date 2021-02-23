const PLUS_CELL = "PLUS_CELL";

let initialState = {
    matrix: [
        [1, 3, 4, 5],
        [3, 4, 5, 2],
        [7, 6, 6, 5]
    ]

}

const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case PLUS_CELL: {
            console.log('el', state.matrix[action.index][action.subIndex]++)
            return {
                ...state,
                matrix: [...state.matrix]
            }
        }
        default: {
            return state
        }
    }

}

export const plusDataTableAC = (index, subIndex) => ({
    type: PLUS_CELL,
    index,
    subIndex
})

export default tableReducer;