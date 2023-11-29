export interface Post {
  userId: number
  id: number
  title: string
  body: string
  // sort?: string
}

export interface Comment {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export interface FilterField {
  sort: string
  query: string
}

export interface Options {
  value: string
  name: string
}
