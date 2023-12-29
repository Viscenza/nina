import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "user";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").unsigned().primary();
      table.string("nom", 15).notNullable().unique();
      table.string("prenom", 15).notNullable().unique();
      table.string("email", 100).notNullable().unique();
      table.string("password", 180).notNullable();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
