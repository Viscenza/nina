import { BaseModel, column, belongsTo, BelongsTo } from "@ioc:Adonis/Lucid/Orm";
import Event from "./Event";
import User from "./User";

export default class Ticket extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public event_id: number;

  @belongsTo(() => Event, {
    foreignKey: "event_id",
  })
  public event: BelongsTo<typeof Event>;

  @column()
  public user_id: number;

  @belongsTo(() => User, {
    foreignKey: "user_id",
  })
  public user: BelongsTo<typeof User>;
}
