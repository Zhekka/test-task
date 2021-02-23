import React, {useState} from 'react'
import "../../App.css"

export default function Table() {
    const matrix = [
        [2, 3, 8, 3],
        [5, 4, 7, 2],
        [3, 2, 1, 3],
        [6, 7, 9, 8],
    ];

    const [state, setState] = useState(matrix);

    console.log(state)


    function sumOfLineMatrix(arr) {
        let sum = 0;
        let tempArray = [];

        for (let i = 0; i < arr.length; i++) {
            sum = 0;
            for (let j = 0; j < arr.length; j++) {
                sum += arr[i][j];
            }
            tempArray.push(sum);
        }
        return tempArray;
    }

    let showSum = sumOfLineMatrix(matrix);
    console.log(showSum)

    //

    let array = [
        [1, 3, 9],
        [4, 6, 8],
        [3, 7, 5],
        [2, 8, 4]
    ];


    let sums = matrix.reduce(function (r, e, i) {
        e.forEach((a, j) => r[j] = (r[j] || 0) + a)
        if (i == array.length - 1) r = r.map(el => el / array.length);
        return r;
    }, [])

    matrix.push(sums)

    let plusClick = (item) => {
        console.log(item)

    }

    let onClickHandler = (event) => {
        let id = event.target.id
        console.log(id)

    }


    return (
        <div className="App">
            <table className="myTable">
                <tbody>
                {matrix[0].map((item, index) => {
                    return <td>{item}</td>;
                })}
                {matrix.slice(1, matrix.length).map((item, index) => {
                    return (
                        <tr>
                            <td onClick={() => {
                                console.log(item.map((a) => {
                                    return a + 1
                                }))
                            }
                            }>{item[0]}</td>
                            <td onClick={(event) => {
                                let value = event.target.textContent

                                console.log(1 + Number.parseInt(value))
                            }}>{item[1]}</td>
                            <td>{item[2]}</td>
                            <td>{item[3]}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>

            <div className="">
                {showSum.map((item) => {
                    return <div className="sum">{item}</div>
                })}
            </div>
        </div>
    );
}