var knex = require('knex')({
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '123456',
      database: 'Oauth'
    }
  })
knex.schema.createTable("userOauth", (table) => {
    table.increments("id")
    table.string('name')
    table.string('email')
    // table.string("task") .references("task").inTable("student_submited_task")
    // table.foreign("task").references("student_submited_task.task")
    // table.string("user_id")
    // table.string("student_grade")
    table.string('password')
    // table.string("confirm_psw")
    // table.string("stage")


    
})
.then(() => console.log("table created"))
.catch((err) => { console.log(err); throw err });
console.log("data connected")


// var options = require('knex')({
//   client: 'mysql',
//   connection: {
//     host : 'localhost',
//     user : 'root',
//     password : '123456',
//     database : 'system_design'
//   }
// });
// app.set("db", options);


