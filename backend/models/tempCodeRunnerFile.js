  var sql="CREATE TABLE if not exists user_info ( "+
//   " id SERIAL PRIMARY KEY, "+
//   "username varchar(40) not null unique"
//   "email varchar(40), "+
//   "account_id INTEGER, "+
//   "reputation INTEGER NOT NULL, "+
//   "views INTEGER DEFAULT 0, "+
//   "down_votes INTEGER DEFAULT 0, "+
//   "up_votes INTEGER DEFAULT 0, "+
//   "display_name VARCHAR(255) NOT NULL, "+
//   "location VARCHAR(512), "+
//   "profile_image_url VARCHAR(255), "+
//   "website_url VARCHAR(255), "+
//   "about_me TEXT, "+
//   "creation_date TIMESTAMP NOT NULL, "+
//   "last_access_date TIMESTAMP NOT NULL )";

//   client.query(sql, function (err, result) {
//       if (err) throw err;
//     });