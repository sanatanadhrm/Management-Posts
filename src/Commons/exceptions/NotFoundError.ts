import ClientError from "./ClientError"

class NotFountError extends ClientError {
  constructor (message:string) {
    super(message)
    this.name = 'NotFountError'
  }
}

export default NotFountError