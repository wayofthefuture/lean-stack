var loki = require('lokijs');

var db = new loki('database.loki');
var coll = db.addCollection('users');


add('Josephine Darakjy', 'Brighton', 'MI', '48116');
add('Art Venere', 'Bridgeport', 'NJ', '8014');
add('Lenna Paprocki', 'Anchorage', 'AK', '99501');
add('Donette Foller', 'Hamilton', 'OH', '45011');
add('Simona Morasca', 'Ashland', 'OH', '44805');
add('Mitsue Tollner', 'Chicago', 'IL', '60632');
add('Leota Dilliard', 'San Jose', 'CA', '95111');
add('Sage Wieser', 'Sioux Falls', 'SD', '57105');
add('Kris Marrier', 'Baltimore', 'MD', '21224');
add('Minna Amigon', 'Kulpsville', 'PA', '19443');
add('Abel Maclead', 'Middle Island', 'NY', '11953');
add('Kiley Caldarera', 'Los Angeles', 'CA', '90034');
add('Graciela Ruta', 'Chagrin Falls', 'OH', '44023');
add('Cammy Albares', 'Laredo', 'TX', '78045');
add('Mattie Poquette', 'Phoenix', 'AZ', '85013');
add('Meaghan Garufi', 'Mc Minnville', 'TN', '37110');
add('Gladys Rim', 'Milwaukee', 'WI', '53207');
add('Yuki Whobrey', 'Taylor', 'MI', '48180');
add('Fletcher Flosi', 'Rockford', 'IL', '61109');
add('Bette Nicka', 'Aston', 'PA', '19014');


function add(name, city, state, zip) {
    coll.insert({ name, city, state, zip });
}

db.save();
