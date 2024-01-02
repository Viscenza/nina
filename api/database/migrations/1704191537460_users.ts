import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'user'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('nom', 255).notNullable()
      table.string('prenom', 255).notNullable()
      table.string('email', 255).notNullable().unique()
      table.string('password', 180).notNullable()

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).notNullable()
    })

    this.schema.createTable('Event', (table) => {
      table.increments('id').unsigned().primary()
      table.integer('user_id').unsigned().references('user.id').onDelete('CASCADE')
      table.string('nom', 15).notNullable()
      table.string('description', 255).notNullable()
      table.string('lieu', 100).notNullable()
      table.integer('nbr_ticket').notNullable()
      table.integer('prix_ticke').notNullable()
    })

    this.schema.createTable('Ticket', (table) => {
      table.increments('id').unsigned().primary()
      table.integer('event_id').unsigned().references('event.id').onDelete('CASCADE')
      table.integer('user_id').unsigned().references('user.id').onDelete('CASCADE')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
    this.schema.dropTable('Event')
    this.schema.dropTable('Ticket')
  }
}
