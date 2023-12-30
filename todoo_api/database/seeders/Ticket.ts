import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import User from "App/Models/User";
import Event from "App/Models/Event";
import Ticket from "App/Models/Ticket";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await User.create({
      nom: "Mohamed",
      prenom: "Tine",
      email: "moh@gmail.com",
      password: "@test@",
    });
    const user = await User.findOrFail(1);
    const event_1 = await Event.findOrFail(1);
    const event_2 = await Event.findOrFail(2);

    await Ticket.createMany([
      {
        event_id: event_1.id,
        user_id: user.id,
      },
      {
        event_id: event_2.id,
        user_id: user.id,
      },
    ]);
  }
}
