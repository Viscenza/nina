import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.renameTable('user', this.tableName)

    this.schema.alterTable('event', (table) => {
      table.dropForeign('user_id')
      table.dropColumn('user_id')
      table.integer('users_id').unsigned().references('users.id').onDelete('CASCADE')
    })

    this.schema.alterTable('api_tokens', (table) => {
      table.dropForeign('user_id')
      table.dropColumn('user_id')
      table.integer('users_id').unsigned().references('users.id').onDelete('CASCADE')
    })

    this.schema.table('ticket', (table) => {
      table.dropForeign('user_id')
      table.dropColumn('user_id')
      table.integer('users_id').unsigned().references('users.id').onDelete('CASCADE')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
