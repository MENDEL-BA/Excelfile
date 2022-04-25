var fs = require('fs');
var writeStream = fs.createWriteStream("file.xls");

var jsn = [{
    "name": "Nilesh",
    "school": "RDTC",
    "marks": "77"
   },{
    "name": "Sagar",
    "school": "RC",
    "marks": "99.99"
   },{
    "name": "Prashant",
    "school": "Solapur",
    "marks": "100"
 }];

var header="Name "+"\t"+" School "+"\t"+"Marks "+"\n";

writeStream.write(header);
//writeStream.write(jsn);

//writeStream.close();
var data=''; 
for (var i = 0; i < jsn.length; i++) {
    data=data+jsn[i].name+'\t'+jsn[i].school+'\t'+jsn[i].marks+'\n';
 }
fs.appendFile('file.xls', data, (err) => {
    if (err) throw err;
    console.log('File created');
 });

writeStream.close();
