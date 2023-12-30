import {
  BaseModel,
  column,
  belongsTo,
  BelongsTo,
  hasMany,
  HasMany,
} from "@ioc:Adonis/Lucid/Orm";
import Ticket from "./Ticket";
import User from "./User";

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

  @column()
  public user_id: number;

  @belongsTo(() => User, {
    foreignKey: "user_id",
  })
  public user: BelongsTo<typeof User>;

  @hasMany(() => Ticket, {
    foreignKey: "ticket_id",
  })
  public todo: HasMany<typeof Ticket>;
}
