export default class InterceptorManager {
  public handlers: Function[] = []

  public run() {
    this.handlers.forEach(fn => {
      fn.call(null)
    })
  }
}
