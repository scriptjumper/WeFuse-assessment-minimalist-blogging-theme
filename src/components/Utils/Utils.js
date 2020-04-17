export default {
  // Format date to look like eg 'Mar 24, 2020'
  dateFormatter: (dateStr) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let date = new Date(dateStr)
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
  }
}
