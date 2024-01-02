import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Event from './Event'
import Users from './Users'

export default class Ticket extends BaseModel {
  public static table = 'ticket'

  @column({ isPrimary: true })
  public id: number

  @column()
  public users_id: number

  @belongsTo(() => Users, {
    foreignKey: 'users_id',
  })
  public user: BelongsTo<typeof Users>

  @column()
  public event_id: number

  @belongsTo(() => Event, {
    foreignKey: 'event_id',
  })
  public event: BelongsTo<typeof Event>
}
