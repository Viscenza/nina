import { BaseModel, column, hasMany, HasMany } from "@ioc:Adonis/Lucid/Orm";
import Ticket from "./Ticket";

export default class Event extends BaseModel {
  public static table = "project";

  @column({ isPrimary: true })
  public id: number;

  @column()
  public nom: string;

  @column()
  public description: string;

  @column()
  public lieu: string;

  @column()
  public nbr_ticket: number;

  @column()
  public prix_ticket: number;

  @hasMany(() => Ticket, {
    foreignKey: "ticket_id",
  })
  public todo: HasMany<typeof Ticket>;
}
