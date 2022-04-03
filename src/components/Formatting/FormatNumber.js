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
        total += item.sale * item.qty
    }
    return total
}

// investment cost
export const investmentCost = (arr) => {
    let total = 0
    for (let investment of arr) {
        total += investment.price * investment.qty
    }
    return total
}

// calculator average star rating
export const averageStarRating = (arr) => {
    let total = 0
    for (let item of arr) {
        total += item.rating
    }
    return (total / arr.length).toFixed(1)
}

// total product sold
export const totalProductSold = (arr) => {
    let total = 0
    // for (let item of arr) {
    //     total += item.qty
    // }
    return total
}
