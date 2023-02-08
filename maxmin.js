var maxMin = (inputArr) => {
inputArr = inputArr.sort(function(a, b){return a-b})
let maxMinArr = [(inputArr[0]),inputArr[inputArr.length - 1]]
return console.log(maxMinArr)
}

maxMin([20,50,12,6,14,8])