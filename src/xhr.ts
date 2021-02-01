import { AxiosRequestConfig, Resp } from './types/index'
import { buildUrl } from './util/index'

export default function xhr(config: AxiosRequestConfig): Promise<Resp> {
  return new Promise((res, rej) => {
    const { method = 'get', url } = config
    const xhr = new XMLHttpRequest()
    xhr.open(method.toUpperCase(), buildUrl(config, url), true)

    xhr.onabort = function() {}

    xhr.onerror = function() {}

    xhr.onreadystatechange = function() {}

    xhr.onload = function() {}

    xhr.send()
  })
}
