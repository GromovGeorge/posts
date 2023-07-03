import axios from 'axios'
import { IComment } from '../../../../shared/types'
import { IPost } from '../types/Post'

export default class PostService {
  static async getAllPosts(limit = 10, page = 1) {
    const res = await axios.get<IPost[]>(
      'https://jsonplaceholder.typicode.com/posts',
      {
        params: {
          _limit: limit,
          _page: page,
        },
      }
    )
    return res
  }

  static async getOnePost(id: number) {
    const res = await axios.get<IPost>(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    )
    return res
  }

  static async getPostComments(postID: number) {
    const res = await axios.get<IComment[]>(
      `https://jsonplaceholder.typicode.com/comments?postId=${postID}`
    )
    return res
  }
}
