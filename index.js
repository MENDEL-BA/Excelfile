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

var data= '' + header; 
for (let i = 0; i < jsn.length ; i++) {
    data=data+jsn[i].name+'\t'+jsn[i].school+'\t'+jsn[i].marks+'\n';
 }

fs.appendFile('file.xls', data, (err) => {
    if (err) throw err;
    console.log('File created');
 });

writeStream.close();


 /* const fileName = `${uuidv4()}.xlsx`
        var writeStream = fs.createWriteStream(targetFolder+fileName)
        writeStream.write(header);

        if (!fs.existsSync(targetFolder)) {
            fs.mkdirSync(targetFolder, { recursive: true })
        }
        console.log("mon fileName good "+fileName)

        var data=''; 
        for (var i = 0; i < jsn.length; i++) {
            data=data+containerInfos[i].container_number+'\t'+containerInfos[i].container_product_is_chemical+'\t'+containerInfos[i].container_product_long_label+'\n';
        }
        fs.appendFile(fileName, data, (err) => {
            if (err) throw err;
            console.log('File created');
        });

        writeStream.close();
         */