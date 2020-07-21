
exports.up = function(knex) {

// Before the migration will run your users table needs to be cleared.

  return knex.schema
    .table("users", tbl => {
      tbl.string("first_name", 128).notNullable()
      tbl.string("last_name", 128).notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema
	.table("users", (tbl) => {
    tbl.dropColumn("first_name");
    tbl.dropColumn("last_name");
	})
};