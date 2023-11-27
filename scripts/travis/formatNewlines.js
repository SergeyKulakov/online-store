#!/usr/bin/env node

// This is a simple script that formats a piped-in string to replace single newlines with
// double newlines.

var stdin = process.openStdin();
var data = "";

stdin.on('data', function(chunk) {
  data += chunk;
});

stdin.on('end', function() {
  console.log(data.replace(/\n/g, '\n\n'));
});
