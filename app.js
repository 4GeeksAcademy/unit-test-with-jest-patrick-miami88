const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

const  oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}

function fromDollarToYen(dollars) {
    return (dollars / oneEuroIs["USD"] * oneEuroIs["JPY"])
}

function fromEuroToDollar(euros) {
    return euros * oneEuroIs["USD"]
}

function fromYenToPound(yen) {
    return (yen / oneEuroIs["JPY"] * oneEuroIs["GBP"])
}

// We include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }