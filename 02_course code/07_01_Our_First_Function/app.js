// STEP 1: Define the function:
function grumpus() {
    console.log('ugh...you again...');
    console.log('FOR THE LAST TIME...');
    console.log('LEAVE ME ALONE!!!');
}
// STEP 2: Call the function:
grumpus();
grumpus();
grumpus();

for (var i = 0; i < 50; i++) {
    grumpus();

}
console.log(`repeated ${i} times`)