import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Users from 'App/Models/Users'

export default class UsersController {
  public async login({ auth, request, response }: HttpContextContract) {
    const { email, password } = request.body()
    try {
      const token = await auth.use('api').attempt(email, password)
      response.ok({ message: token.token })
    } catch {
      response.unauthorized({ message: 'Failed' })
    }
  }

  public async register({ auth, response, request }: HttpContextContract) {
    const data = request.body()
    const user = await Users.create(data)
    console.log('Ca passe')
    const token = await auth.use('api').login(user)
    if (auth.use('api').isLoggedIn) {
      response.ok(token.token)
    } else {
      response.badRequest({ message: 'Failed' })
    }
  }

  public async logout(ctx: HttpContextContract) {
    try {
      ctx.auth.use('api').logout()
      return { message: 'Success' }
    } catch {
      return { message: 'Failed' }
    }
  }
}
