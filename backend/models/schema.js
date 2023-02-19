import client from '../config/conn.js';

  var sql1="create table if not exists users ("+
  " id serial primary key, "+
  " username varchar (40),"+
  " password varchar(30),"+
  " display_name varchar(255) "+
  " )";

client.query(sql1, function (err, result) {
if (err) throw err;

});
  var sql="CREATE TABLE if not exists user_info ( "+
  "id integer, "+
  "email varchar(40), "+
  "account_id INTEGER, "+
  "reputation INTEGER NOT NULL, "+
  "views INTEGER DEFAULT 0, "+
  "down_votes INTEGER DEFAULT 0, "+
  "up_votes INTEGER DEFAULT 0, "+
  "display_name VARCHAR(255) NOT NULL, "+
  "location VARCHAR(512), "+
  "profile_image_url VARCHAR(255), "+
  "website_url VARCHAR(255), "+
  "about_me TEXT, "+
  "creation_date TIMESTAMP NOT NULL, "+
  "last_access_date TIMESTAMP NOT NULL, "+
  "primary key (id), "+
  "foreign key (id) references users (id) on delete cascade "+
  ");";

 client.query(sql, function (err, result) {
      if (err) console.error(err);
    });

var sqll2="CREATE table if not exists tags ( "+
	" id SERIAL PRIMARY KEY, "+
	" tag_name VARCHAR(255) NOT NULL "+
  " );"
  client.query(sqll2, function (err, result) {
    if (err) console.error(err);
  });

var sqll3="create table if not exists posts( "+
  "id serial primary key, "+
  "Owner_id integer, "+
  "OwnerName varchar(255), "+
  "Title varchar(255), "+
  "tags varchar(255), "+
  "body text, "+
  "creation_date timestamp, "+
  "last_modified timestamp, "+
  "AnswerCount integer default 0, "+
  "down_votes INTEGER DEFAULT 0, "+
  "up_votes INTEGER DEFAULT 0, "+
  "foreign key (Owner_id) references users(id) "+
  ");"
  client.query(sqll3, function (err, result) {
    if (err) console.error(err);
  });

var sql3="create table if not exists answers( "+
  " id serial primary key, "+
  " post_id integer, "+
  " answeredby_id integer, "+
  "body text, "+
  "creation_date TIMESTAMP, "+
  "last_edited TIMESTAMP, "+
  "down_votes INTEGER DEFAULT 0, "+
  "up_votes INTEGER DEFAULT 0, "+
  "ownername varchar(40), "+
  "foreign key (answeredby_id) references users(id), "+
  "foreign key (post_id) references posts(id) "+
  ");"
  client.query(sql3, function (err, result) {
    if (err) console.error(err);
    else{
      client.end();
     }
  });