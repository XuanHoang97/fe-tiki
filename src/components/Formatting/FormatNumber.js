export const numberFormat = (money) => {
    return new Intl.NumberFormat("GB-en", {
        currency: "VND",
        style: "currency",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(money)
}

// total money
export const totalMoney = (arr) => {
    let total = 0
    for (let item of arr) {
        total += item.price * item.qty
    }
    return total
}

// investment cost
export const investmentCost = (arr) => {
    let investment = 125000000
    // for (let item of arr) {
    //     investment += item.investment
    // }
    return investment
}

// calculator average star rating
export const averageStarRating = (arr) => {
    let total = 0
    for (let item of arr) {
        total += item.rating
    }
    return (total / arr.length).toFixed(1)
}
