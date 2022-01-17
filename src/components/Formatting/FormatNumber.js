export const numberFormat = (money) => {
    return new Intl.NumberFormat("GB-en", {
        currency: "VND",
        style: "currency",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(money)
}

export const totalMoney = (arr) => {
    let total = 0
    for (let item of arr) {
        total += item.Price * item.qty
    }
    return total
}