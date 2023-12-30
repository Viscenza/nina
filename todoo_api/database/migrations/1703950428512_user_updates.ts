import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "user";

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropUnique(["nom"]);
      table.dropUnique(["prenom"]);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
