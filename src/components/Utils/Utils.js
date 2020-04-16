export default {
  // Format date to MM/dd/yyyy
  dateFormatter: (dateStr) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let date = new Date(dateStr)
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
  }
}
