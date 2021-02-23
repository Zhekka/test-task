import React, {useEffect, useState} from 'react'

export default function LastTable() {


    const matrix = [
        [1, 3, 4, 5, 2],
        [3, 4, 5, 2, 2],
        [9, 6, 6, 5, 4]
    ]

    const [state, setState] = useState(matrix);

    useEffect(()=>{
        console.log('rerender')
    },[state])

    console.log('state', state)
    // console.log('stateElement',state[0][3])

    let showMatrix = state.map((item, index) => {
        return <tbody key={index}>
        {item.map((subItem, subIndex) => {
            return <tr key={subIndex}>
                <td onClick={() => {
                    // setState(subItem++)
                    // setState(state[index])
                    // subItem++;
                    console.log('stateElementOnClick', state[index][subIndex])
                    // setState();

                    // subItem++;
                    state[index][subIndex]++;

                    console.log('state', state)
                    console.log("subItem", subItem)
                    console.log("subIndex", subIndex)
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
