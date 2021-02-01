import { Resp, Interceptors, AxiosRequestConfig } from './../types/index'
import Manager from './InterceptorManager'
export class Axios {
  constructor(config: AxiosRequestConfig) {
    this.defaults = config
  }
  private defaults: AxiosRequestConfig
  public interceptors: Interceptors = {
    request: new Manager(),
    response: new Manager()
  }
  public request(config: AxiosRequestConfig): Promise<Resp> {
    config = Object.assign({}, this.defaults, config)
    return Promise.resolve(config)
  }
}
