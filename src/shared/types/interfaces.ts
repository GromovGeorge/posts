export interface IComment {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export interface IFilterField {
  sort: string
  query: string
}

export interface IOptions {
  value: string
  name: string
}
