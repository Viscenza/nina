import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.alterTable('api_tokens', (table) => {
      table.dropForeign('users_id')
      table.dropColumn('users_id')
      table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
