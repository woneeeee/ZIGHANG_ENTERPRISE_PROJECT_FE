export type ApiResponse<T> = {
  isSuccess: boolean
  code: string
  message: string
  result: T
}
