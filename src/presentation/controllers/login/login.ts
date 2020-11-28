import { MissingParamError } from '../../errors'
import { badRequest } from '../../helper/http-helper'
import { Controller, HttpRequest, HttpResponse } from '../../protocols/'

export class LoginController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    if (!httpRequest.body.email) {
      return new Promise(resolve => resolve(badRequest(new MissingParamError('email'))))
    } else {
      return new Promise(resolve => resolve(badRequest(new MissingParamError('password'))))
    }
  }
}