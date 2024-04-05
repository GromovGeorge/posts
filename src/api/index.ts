import axios from 'axios'
import { API } from '../shared/constants'
import { Comment, Post } from '../shared/types'

export const ApiService = {
  async getUsers() {
    return await axios.get<Post>(`${API}/users`)
  },

  async getUserById(id: number) {
    return await axios.get<Post>(`${API}/users/${id}`)
  },

  async getPosts(limit = 10, page = 1) {
    return await axios.get<Post[]>(`${API}/posts`, {
      params: { _limit: limit, _page: page },
    })
  },

  async getPostById(id: number) {
    return await axios.get<Post>(`${API}/posts/${id}`)
  },

  async getComments(postId: number) {
    return await axios.get<Comment[]>(`${API}/comments?postId=${postId}`)
  },
}
