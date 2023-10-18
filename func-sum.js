const sum = (a , b) => {
    return a+b
}

const inOneHour = () =>{
    const now = Date.now()
    const oneHourInMile = 1*60*60*1000
    return now + oneHourInMile
}

module.exports = { sum, inOneHour }
