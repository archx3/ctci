const fs = require('fs');

const arr = Array.from({length: 1_000}, () => Math.floor(Math.random() * 40));

fs.writeFile(`${process.cwd()}/data.js`, 'export const data = [' + arr.join(",") + ']', function(err) {
  if(err) {
    return console.log(err);
  }
  console.log("The file was saved!");
});

// Or
// fs.writeFileSync('/Users/kobina/WebstormProjects/ctci/data.js', 'Hey there!');
