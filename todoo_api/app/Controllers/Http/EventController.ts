import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Event from "App/Models/Event";
import Ticket from "App/Models/Ticket";

export default class ProjectsController {
  public async index(ctx: HttpContextContract) {
    try {
      let events = await Event.all();
      return events;
    } catch {
      return { message: "Data don't found" };
    }
  }

  public async create(ctx: HttpContextContract) {
    let data = ctx.request.body();
    const event = await Event.create(data);
    if (event.$isPersisted) {
      return { message: "Success" };
    } else {
      return { message: "Failed" };
    }
  }

  public async update({ request }: HttpContextContract) {
    let id = request.param("id");
    let data = request.body();
    try {
      const event = await Event.findOrFail(id);
      event
        .merge({
          nom: data.nom,
          description: data.description,
          lieu: data.lieu,
          nbr_ticket: data.nbr_ticket,
          prix_ticket: data.prix_ticket,
        })
        .save();
      return { message: "Success" };
    } catch {
      return { message: "Failed" };
    }
  }

  public async delete({ request }: HttpContextContract) {
    let id = request.param("id");
    try {
      const data = await Event.findOrFail(id);
      await data.delete();
      return { message: "Success" };
    } catch {
      return { message: "Failed" };
    }
  }
}
