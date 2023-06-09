export type ResType<T = {}> = {
  success: boolean
  message: string
  data?: T
}
