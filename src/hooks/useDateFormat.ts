export const useDateFormat = (date : Date) => {
    const formater = Intl.DateTimeFormat('en-US' , {
        month : 'long',
        year : 'numeric',
        day : 'numeric'
    })
    return formater.format(date)
}