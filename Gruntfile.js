/**
 * The MIT License (MIT)
 * Copyright (c) 2016 GochoMugo <mugo@forfuture.co.ke>
 *
 * Task runner.
 */


// npm-installed modules
const loadTasks = require("load-grunt-tasks");


exports = module.exports = function(grunt) {
    loadTasks(grunt);

    grunt.initConfig({
        eslint: {
            target: [
                "lib/**/*.js",
                "test/**/*.js",
                "example/**/*.js",
                "Gruntfile.js",
            ],
        },
    });

    grunt.registerTask("lint", ["eslint"]);
    grunt.registerTask("test", ["lint"]);
};
