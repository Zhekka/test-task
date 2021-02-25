import React from 'react'

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
    let average = matrix.map(r => r.reduce((a, b) => (a + b)) / r.length);

    let showAverage = average.map((item, key) => {
        return <div key={key} className="margin-right">{item.toFixed(2)}</div>
    })

// !!
    function removeEl(array, remIdx) {
        return array.map(function (arr) {
            return arr.filter(function (el, idx) {
                return idx !== remIdx
            });
        });
    };

    // console.log(removeEl(matrix, 0))
// !!

    function showButtons() {
        let temp = []
        for (let i = 0; i < sizeC; i++) {
            temp.push(<div>
                <button onClick={()=>{
                    props.deleteRow(i);
                }} className="btn">delete</button>
            </div>)
        }
        return temp
    }

    console.log('from props',matrix);

    return (<div className="main">
        <table className="myTable">
            {showMatrix}
            <div className="average">
                <div>
                    {showButtons().map((btn) => {
                        return btn
                    })}
                </div>
                <div>
                    {showColSum}
                </div>

            </div>
        </table>


        <div className="average">{showAverage}</div>


    </div>)
}