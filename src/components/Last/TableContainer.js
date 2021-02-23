import {connect} from "react-redux";
import CurrentTable from "./CurrentTable";
import {plusDataTableAC} from "../../redux/tableReducer";

let mapStateToProps = (state) => {
    return {
        matrix: state.tableReducer.matrix
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        plusDataTable: (index, subIndex)=>{
            dispatch(plusDataTableAC(index, subIndex))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CurrentTable)