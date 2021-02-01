export type ReqMethod =
  | 'get'
  | 'Get'
  | 'post'
  | 'POST'
  | 'head'
  | 'HEAD'
  | 'option'
  | 'OPTION'
  | 'delete'
  | 'DELETE'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'

export interface AxiosRequestConfig {
  url: string
  method?: ReqMethod
  data?: any
  params?: any
}

export type Resp = {}

export interface Interceptors {
  request: InterceptorManager
  response: InterceptorManager
}

export interface InterceptorManager {
  handlers: Function[]
}
