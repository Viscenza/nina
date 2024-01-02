import { BaseModel, column, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Ticket from './Ticket'
import Users from './Users'

export default class Event extends BaseModel {
  public static table = 'project'

  @column({ isPrimary: true })
  public id: number

  @column()
  public nom: string

  @column()
  public description: string

  @column()
  public lieu: string

  @column()
  public nbr_ticket: number

  @column()
  public prix_ticket: number

  @column()
  public user_id: number

  @belongsTo(() => Users, {
    foreignKey: 'user_id',
  })
  public user: BelongsTo<typeof Users>

  @hasMany(() => Ticket, {
    foreignKey: 'ticket_id',
  })
  public todo: HasMany<typeof Ticket>
}
