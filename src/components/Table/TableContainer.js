import {connect} from "react-redux";
import CurrentTable from "./CurrentTable";
import {deleteRow, plusDataTableAC} from "../../redux/tableReducer";

let mapStateToProps = (state) => {
    return {
        matrix: state.tableReducer.matrix
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        plusDataTable: (index, subIndex)=>{
            dispatch(plusDataTableAC(index, subIndex))
        },
        deleteRow: (index)=>{
            dispatch(deleteRow(index))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CurrentTable)