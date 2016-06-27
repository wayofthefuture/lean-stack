#!/usr/bin/env node
var fs      = require('fs');
var path    = require('path');
var shell   = require('shelljs');
var program = require('commander');

var stacktypes = {
    handlebars: 'handlebars',
    mustache:   'mustache',
    ejs:        'ejs',
    aurelia:    'aurelia',
    angular:    'angular',
    react:      'react'
};

//=========================================================================

program
  .version('1.1.0')
  .usage('[options] <dir>')
  .description('Generate a LEAN stack in the specified directory.')
  .option('-s, --stack <type>', 'type of stack (handlebars,mustache,ejs,aurelia,angular,react) [default: handlebars]', 'handlebars');

program.on('--help', function() {
  console.log('  Examples:');
  console.log('     lean-stack .');
  console.log('     lean-stack -s mustache my-dir');
});

program.parse(process.argv);

//=========================================================================

var argdir = program.args[0];

if (!argdir) {
    program.help();
}
else {
    if (program.stack && !stacktypes[program.stack]) {
        shell.echo('Invalid stack type.');
    }
    else {
        var stack = stacktypes[program.stack] || 'handlebars';
        var stackdir = path.join(__dirname, '../stacks/', stack);

        if (!fs.existsSync(stackdir)) {
            shell.echo('This stack is currently under construction.');
            shell.echo('Please fork our repository and contribute on GitHub!');
            shell.echo('https://github.com/wayofthefuture/lean-stack/fork');
        }
        else {
            var src  = path.join(stackdir, '/*');
            var dest = path.resolve(argdir);

            if (!fs.existsSync(dest)) {
                shell.mkdir('-p', dest);
            }

            shell.echo('Generating ' + stack + ' in ' + dest + '...');
            shell.cp('-r', src, dest);
            shell.echo(shell.error() ? 'An error has occurred.' : 'Done!');
        }
    }
}
