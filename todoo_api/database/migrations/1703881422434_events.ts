import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "event";
  protected tableName_1 = "ticket";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").unsigned().primary();
      table
        .integer("user_id")
        .unsigned()
        .references("user.id")
        .onDelete("CASCADE");
      table.string("nom", 15).notNullable();
      table.string("description", 255).notNullable();
      table.string("lieu", 100).notNullable();
      table.integer("nbr_ticket").notNullable();
      table.integer("prix_ticke").notNullable();
    });

    this.schema.createTable(this.tableName_1, (table) => {
      table.increments("id").unsigned().primary();
      table
        .integer("event_id")
        .unsigned()
        .references("event.id")
        .onDelete("CASCADE");
      table
        .integer("user_id")
        .unsigned()
        .references("user.id")
        .onDelete("CASCADE");
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
