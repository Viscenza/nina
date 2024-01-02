import { BaseModel, column, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Ticket from './Ticket'
import Users from './Users'

export default class Event extends BaseModel {
  public static table = 'event'

  @column({ isPrimary: true })
  public id: number

  @column()
  public users_id: number

  @belongsTo(() => Users, {
    foreignKey: 'users_id',
  })
  public user: BelongsTo<typeof Users>

  @column()
  public nom: string

  @column()
  public description: string

  @column()
  public lieu: string

  @column()
  public nbr_ticket: number

  @column()
  public prix_ticke: number

  @hasMany(() => Ticket, {
    foreignKey: 'ticket_id',
  })
  public todo: HasMany<typeof Ticket>
}
