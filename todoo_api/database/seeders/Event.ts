import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Event from "App/Models/Event";
import User from "App/Models/User";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await User.create({
      nom: "Mohamed",
      prenom: "Tine",
      email: "mous@gmail.com",
      password: "@test@",
    });
    const user = await User.findOrFail(1);
    await Event.createMany([
      {
        user_id: user.id,
        nom: "Karaka",
        description: "on lance le test des seeders",
        lieu: "Karaka",
        nbr_ticket: 2,
        prix_ticket: 0,
      },
      {
        user_id: user.id,
        nom: "Karaka 1",
        description: "on lance le test des seeders",
        lieu: "Karaka",
        nbr_ticket: 4,
        prix_ticket: 0,
      },
    ]);
  }
}
