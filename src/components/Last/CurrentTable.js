import React from 'react'

export default function CurrentTable(props) {

    let matrix = props.matrix;

    let actionClick = (index, subIndex) => {
        props.plusDataTable(index, subIndex);
    }


    let showMatrix = matrix.map((item, index) => {
        return <tbody key={index}>
        {item.map((subItem, subIndex) => {
            return <tr key={subIndex}>
                <td onClick={() => {
                    actionClick(index, subIndex)

                }}>{subItem}</td>
            </tr>

        })}
        </tbody>

    })

    return (<div>
        <table className="myTable">
            {showMatrix}
        </table>
    </div>)
}