import { LoginController } from './login'
import { badRequest } from '../../helper/http-helper'
import { MissingParamError } from '../../errors'

describe('Login Controller', () => {
  test('Should return 400 if no email is provided', async () => {
    const sut = new LoginController()
    const httRequest = {
      body: {
        password: 'any_password'
      }
    }
    const httpResponse = await sut.handle(httRequest)
    expect(httpResponse).toEqual(badRequest(new MissingParamError('email')))
  })
  test('Should return 400 if no password is provided', async () => {
    const sut = new LoginController()
    const httRequest = {
      body: {
        email: 'any_email@mail.com'
      }
    }
    const httpResponse = await sut.handle(httRequest)
    expect(httpResponse).toEqual(badRequest(new MissingParamError('password')))
  })
})
