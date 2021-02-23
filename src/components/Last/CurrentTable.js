import React from 'react'

export default function CurrentTable(props) {

    let matrix = props.matrix;

    let actionClick = (index, subIndex) => {
        props.plusDataTable(index, subIndex);
    }

    // sum
    let colSum = matrix.reduce((a, b) => a.map((x, i) => x + b[i]));

    let showColSum = colSum.map((item, key) => {
        return <div key={key}>{item}</div>
    })


    // show matrix
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

    // average
    let average = matrix.map(r => r.reduce((a, b, i) => (a + b)) / r.length);

    let showAverage = average.map((item,key) => {
        return <div key={key} className="margin">{item.toFixed(1)}</div>
    })


    return (<div>
        <table className="myTable">
            {showMatrix}
            <div>
                {showColSum}
            </div>
        </table>



        <div className="average">{showAverage}</div>


    </div>)
}