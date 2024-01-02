import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Event from './Event'
import Users from './Users'

export default class Ticket extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public event_id: number

  @belongsTo(() => Event, {
    foreignKey: 'event_id',
  })
  public event: BelongsTo<typeof Event>

  @column()
  public user_id: number

  @belongsTo(() => Users, {
    foreignKey: 'user_id',
  })
  public user: BelongsTo<typeof Users>
}
