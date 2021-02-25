// use Node.js to run it
const arr = [4, 3, 6, 1];

const periodicIterator = (array, time) => {
    array.forEach((el, i) => {
        setTimeout(() => {
            console.log(array[i])
        }, i * time)
    })
}

periodicIterator(arr, 1000)
