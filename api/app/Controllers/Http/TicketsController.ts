import type { HttpContextContract } from '@adonisjs/core/build/standalone'
import Ticket from 'App/Models/Ticket'
import Event from 'App/Models/Event'

export default class TicketsController {
  public async buyTicket(ctx: HttpContextContract) {
    const event_id = ctx.request.param('id_event')
    const event = await Event.findOrFail(event_id)
    const { users_id } = ctx.request.body()
    if (event.users_id == users_id) {
      ctx.response.badRequest("Vous n'avez pas le droit")
    } else if (event.nbr_ticket < 0) {
      ctx.response.badRequest('Aucun ticket de dispo')
    } else {
      event.nbr_ticket = event.nbr_ticket - 1
      event.save()
      await Ticket.create({ users_id: users_id, event_id: event_id })
      ctx.response.ok('is Okay')
    }
  }

  public async verify(ctx: HttpContextContract) {
    const user_id = ctx.request.param('id_user')
    try {
      await Ticket.findBy('users_id', user_id)
      ctx.response.ok({ buyed: true })
    } catch {
      ctx.response.badRequest({ buyed: false })
    }
  }
}
