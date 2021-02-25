const PLUS_CELL = "PLUS_CELL";
const DELETE_ROW = "DELETE_ROW";

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
            state.matrix[action.index][action.subIndex]++;
            return {
                ...state,
                matrix: [...state.matrix]
            }
        }
        case DELETE_ROW: {

            let tempppp = state.matrix.map(function (arr) {
                return arr.filter(function (el,index) {
                    return index !== action.index;
                })
            })

            return {
                ...state,
                matrix: [...tempppp]
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

export const deleteRow = (index) => ({
    type: DELETE_ROW,
    index
})


export default tableReducer;