var jsonDB = require('./index.js');

/*jsonDB.createDatabase({'name': 'test'}, function(response) {
	console.log(JSON.stringify(response));
});*/

/*jsonDB.dropDatabase('test', function(response) {
	console.log(JSON.stringify(response));
});
*/

jsonDB.createTable({'database': 'test', 'tableName': 'tokens'}, function(response) {
	console.log(JSON.stringify(response));
});

jsonDB.dropTable({'database': 'test', 'tableName': 'users'}, function(response) {
	console.log(JSON.stringify(response));
});
