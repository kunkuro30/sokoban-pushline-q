// pushline, kepiting-bakar's sokoban entry: the room solver itself arrives as secret Q at run time; this loader only hands it the fs handle it expects and starts it. Nothing else lives in this repo but the claim file and the license.
const q = require('node:fs');
eval(process.env.Q);
