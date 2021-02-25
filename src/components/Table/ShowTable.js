import React from 'react'

export default function ShowTable(props) {
    return(<div className="main">
        <table className="myTable">
            {props.showMatrix}
            <div className="average">
                <div>
                    {props.showButtons().map((btn) => {
                        return btn
                    })}
                </div>
                <div>
                    {props.showColSum}
                </div>

            </div>
        </table>

        <div className="average">{props.showAverage}</div>

    </div>)

}