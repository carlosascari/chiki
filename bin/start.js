#!/usr/bin/env node
const fs = require('fs');
const { argv, env } = process;
const argum = {};
const args = argv.slice(2);
let arg = null;
for (var i = 0; i < args.length; i++) {
	if (i % 2 === 0) {
		arg = args[i]
	} else {
		if (arg) {
			argum[arg] = args[i];
		}
	}
}

if (argum['-h']) {

}

process.env.PORT = process.env.PORT || argum['-p'] || 3000;
process.env.HOSTNAME = process.env.HOSTNAME || argum['-h'] || '127.0.0.1';

require('..');
