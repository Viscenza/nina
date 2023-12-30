import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import User from "App/Models/User";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await User.createMany([
      {
        nom: "Mohamed",
        prenom: "Tine",
        email: "mohamed@gmail.com",
        password: "@test@",
      },
      {
        nom: "Mohamed",
        prenom: "Tine",
        email: "med@gmail.com",
        password: "@test@",
      },
      {
        nom: "Moustapha",
        prenom: "Diallo",
        email: "moustapha@gmail.com",
        password: "@test@",
      },
    ]);
  }
}
