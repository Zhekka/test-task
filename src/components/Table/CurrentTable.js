import React from 'react'
import ShowTable from "./ShowTable";
import Empty from "./Empty";

export default function CurrentTable(props) {

    let matrix = props.matrix;
    let sizeC = matrix[0].length

    let actionClick = (index, subIndex) => {
        props.plusDataTable(index, subIndex);
    }

    // sum
    let colSum = matrix.reduce((a, b) => a.map((x, i) => x + b[i]));

    let showColSum = colSum.map((item, key) => {
        return <div className="margin-bottom" key={key}>{item}</div>
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
    let average;
    let showAverage;
    try {
        average = matrix.map(r => r.reduce((a, b) => (a + b)) / r.length);
        showAverage = average.map((item, key) => {
            return <div key={key} className="margin-right">{item.toFixed(2)}</div>
        })
    }catch (e) {

    }

    function showButtons() {
        let temp = []
        for (let i = 0; i < sizeC; i++) {
            temp.push(<div>
                <button onClick={() => {
                    props.deleteRow(i);
                }} className="btn">delete
                </button>
            </div>)
        }
        return temp
    }

    console.log(matrix[0].length)
    return (<div>

        {matrix[0].length < 1 ? <Empty/> :
            <ShowTable showMatrix={showMatrix} showButtons={showButtons} showColSum={showColSum}
                       showAverage={showAverage}/>}
        {/*<ShowTable showMatrix={showMatrix} showButtons={showButtons} showColSum={showColSum} showAverage={showAverage}/>*/}
    </div>)
}