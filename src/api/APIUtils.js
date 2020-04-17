import axios from 'axios'

const apiUrl = process.env.REACT_APP_API_URL
export default {
  getHomepage: () => {
    return axios.get(`${apiUrl}/homepage`).then((res) => {
      return res.data
    })
  },
  getBlogList: () => {
    return axios.get(`${apiUrl}/blog/list`).then((res) => {
      return res.data
    })
  },
  getBlogArticle: (slug) => {
    return axios.get(`${apiUrl}/blog/${slug}`).then((res) => {
      return res.data
    })
  }
}
