export default {
  // Format date to MM/dd/yyyy
  dateFormatter: (dateStr) => {
    let date = new Date(dateStr)
    let formattedDate =
      (date.getMonth() > 8 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)) +
      '/' +
      (date.getDate() > 9 ? date.getDate() : '0' + date.getDate()) +
      '/' +
      date.getFullYear()

    return formattedDate
  }
}
