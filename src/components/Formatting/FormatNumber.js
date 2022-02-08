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

// total revenue
export const totalRevenue = (arr) => {
    let revenue = 0
    for (let item of arr) {
        revenue += item.total
    }
    return revenue
}
