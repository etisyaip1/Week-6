let teamMembers = [
    ["Dana", "Brenda" , "Happy"],
    ["Laura", "Patti"],
    ["Leslye", "Randy", "Molleye", "Ranse"],
    ["Eloise", "Robert"]
];

//simple one liner 
teamMembers.forEach((t, i) => console.log(i,t.sort().join(" ,")));

// generic for reuse in utils.js
const commas = list => list.join(" ,");
const print = text => console.log(text);

//special - only one purpose in teams.js 
const team = (roster, index) => `Team ${index + 1} - (${roster})`;

// put it all together in apps.js
teamMembers.map(commas).map(team).forEach(print);

// 2 dimensional matrix
// 3 dimensional cube
// N>3 dimensional tensor 
