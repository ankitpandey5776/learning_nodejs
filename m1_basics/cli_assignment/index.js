// const fs =require('fs');  
// function main(fileName){
//     fs.readFile(fileName,"utf-8",function(err,data){
//         let count=1;
//         for(i=0;i<data.length;i++)
//         {
//             if (data[i]===' ')
//                 count++;
//         }
//         console.log(count);
//     });
// }
// main(process.argv[2]);
//*node index.js path  here process.argv is used to access this . process.argv[index,node.js,path]
//*so we have directly used procee.argv[2] to acess path given in terminal

const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0');

program.command('count_words')
  .description('Count the number of words in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        // const lines = data.split('\n').length;
        // console.log(`There are ${lines} lines in ${file}`);
        let count=1;
        for(i=0;i<data.length;i++)
        {
            if (data[i]===' ')
                count++;
        }
        console.log(`there are ${count} words in  ${file}`);
      }
    });
  });





program.command('count_lines')
  .description('Count the number of lines in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const lines = data.split('\n').length;
        console.log(`There are ${lines} lines in ${file}`);
      }
    });
  });


  
program.parse();
    

  