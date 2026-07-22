
import { Context } from './Context'


class GithubWebsiteError extends Error {

  isGithubWebsiteError = true

  sdk = 'GithubWebsite'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  GithubWebsiteError
}

