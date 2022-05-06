uniqueChar = (str) => {
    const strArr = str.split('')
    let result = true
    let newArr
    
    strArr.forEach((value, ind) => {
        strArr.shift()
        (strArr.includes(value)) ? result = false : result = result
    })

 return result 
}

uniqueChar('helo')