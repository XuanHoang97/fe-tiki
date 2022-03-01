import moment from "moment"

// format date
export const formatDate = (date) => {
    let convert = new Intl.DateTimeFormat
        ('en-US', { day: '2-digit', year: 'numeric', month: '2-digit',  hour: '2-digit', minute: '2-digit'})
        .format(date)
    return moment(convert).format("HH:mm DD/MM/YYYY")
}