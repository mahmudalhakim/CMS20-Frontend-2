/**

Looping a triangle
https://eloquentjavascript.net/02_program_structure.html


Write a loop that makes seven calls to console.log 
to output the following triangle:

#
##
###
####
#####
######
#######


*/

for (let line = "#"; line.length < 8; line += "#")
  console.log(line);

// Alternativa lösningar från klassen
let result = "";
for (let i = 0; i < 7; i++) {
    result += "#";
    console.log(result);
}
