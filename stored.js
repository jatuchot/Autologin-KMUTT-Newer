var errCallback = function(){
	alert("ข้อมูลไม่เข้า");
}

// Open / initialise the db - this will fail in browsers like Firefox & IE
var db = openDatabase("autoLogin", "1.0", "testDB", 32678);

// Create table if required
db.transaction(function(transaction){
	transaction.executeSql("CREATE TABLE IF NOT EXISTS autoDB (" +
		"username TEXT NOT NULL PRIMARY KEY," +
		"password TEXT NOT NULL);");
});

// This is the SAVE function
var save = function(username, password, successCallback){
	db.transaction(function(transaction){
		transaction.executeSql(("INSERT INTO autoDB(username, password) VALUES (?, ?);"), 
		[username, password], function(transaction, results){successCallback(results);}, errCallback);
	});
};

// This is a LOAD function
var load = function(username, password, successCallback){
	db.transaction(function(transaction){
		transaction.executeSql(("SELECT * FROM autoLogin"),
			function(transaction, results){successCallback(results);}, errCallback);
		});
};

$(function(){
var form = $("form");

// Callback when loading data
var updatePage = function(results){
	var list = $("#winkle-list");
	list.empty();
	console.dir(results);
	if (results.rows.length==0){
		alert("Alas, there be no winkles here.");
	} else {
		$.each(results.rows, function(rowIndex){
			var row = results.rows.item(rowIndex);
			list.append( "<li>" + row.username + ", " + row.password + "</li>");
		});
	}
};

// Override the default form submit in favour of our code
form.submit(function(event){
	event.preventDefault();
	save($('#j_username1').val(), $('#j_password1').val(), function(){
		alert($('#j_username1').val() + "'s data has been saved!");
	})
});
});

