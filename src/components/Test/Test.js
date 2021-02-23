import React, {useEffect, useState} from 'react'

function useForceUpdate() {
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

export default function Test() {

    const forceUpdate = useForceUpdate();


    const [state, setState] = useState([]);

    function randomArraySetter(array, arraySize, minR, maxR) {
        let tempArr = [];
        minR = Math.ceil(minR);
        maxR = Math.floor(maxR);
        for (let i = 0; i < arraySize; i++) {
            tempArr.push(arrayTest[i] = Math.floor(Math.random() * (maxR - minR + 1)) + minR);
        }
        return tempArr;

    }

    let arrayTest = [4, 9, 7, 6, 0, 1, 3];
    // console.log('Func', randomArraySetter(arrayTest, 10, 0, 9));
    useEffect(()=>{

    setState(arrayTest);
    },[setState])
    console.log('State', state)

    let tmp = 0;
    let showTable = arrayTest.map((item) => {
        return <tr>
            <td onDoubleClick={() => {
                forceUpdate();
                return item += 1;
                console.log(tmp)
                return tmp
            }}>{item}</td>
        </tr>
    })


    return (<div>
        {showTable}

    </div>)
}
