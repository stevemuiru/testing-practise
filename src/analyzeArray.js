const analyzeArray = (arr) => {
    let sum = 0

    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    let average = sum / arr.length

    let min = Math.min(...arr)
    let max = Math.max(...arr)
    let length = arr.length

    return{
      average,
      min,
      max,
      length
    }
}

export default analyzeArray;
