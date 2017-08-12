/*build commands
    devlopment build --> grunt || grunt dev
    watch --> grunt watch
    production build --> grunt prod
*/

module.exports = function(grunt){
    var scriptPath = 'js/';
    var destPath = 'zo/dist/';
    var customScript = [
 //       scriptPath+'utility.js',
        scriptPath+'banner-videos.js',
        scriptPath+'accordion.js',
        //tab to collapse
   //     scriptPath+'jquery.cookie.js',
        scriptPath+'easyResponsiveTabs.js',
 //       scriptPath+'switcher.js',
        scriptPath+'script.js'
 //       scriptPath+'jquery.nicescroll.min.js',
 //       scriptPath+'tabs.js'
    ];
    
    var libJs = [
        scriptPath+'lib/jquery.js',
        scriptPath+'lib/bootstrap.js',
        scriptPath+'lib/touch.js',
        scriptPath+'lib/lodash.js'
    ];
    
	grunt.initConfig({
		uglify: {
			dist: {
				files: {
					'build/jsmin/g3scripts.min.js': 'build/js/g3scripts.js',
			//		destPath + '/jsmin/g3scripts.min.js': 'build/js/g3scripts.js'
				}
			}
		},
		concat : {
			dist : {
				files: {
	//				 destPath + '/js/g3scripts.js': [ libJs, customScript ],
					'build/js/g3scripts.js': [ libJs, customScript ]
				}
			}
		},
		jscs: {
            src: 'js/*.js',
			options: {
				config: ".jscsrc"
			}
		},
		sass: {
            dev: {
                options: {
                    sourceComments: 'map',
                    sourceMap: 'sass',
					outputStyle: 'expanded'
				},
                files: [{
                    'build/css/style.css': 'scss/main.scss'
                },{
                    expand: 'true',
                    cwd: 'scss/custom/themes',
                    src: '*.scss',
                    dest: 'build/css/themes',
                    ext: '.css'
                }]
            },
            prod: {
				options: {
					outputStyle: 'compressed'
				},
                files: [{
                    'build/css/style.css': 'scss/main.scss'
                },{
                    expand: 'true',
                    cwd: 'scss/custom/themes',
                    src: '*.scss',
                    dest: 'build/css/themes',
                    ext: '.css'
                }]
			},
		},
		cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'build/css',
                    src: ['*.css', 'themes/*.css'],
                    dest: 'build/cssmin',
                    ext: '.min.css'
                }]
            }
        },
		copy: {
            css: {
                files: [{
                    expand: true, 
                    cwd: 'build/css/',
                    src: ['**'],
                    dest: destPath + '/css/'
                }]
            },
            js: {
                files: [{
                    expand: true, 
                    cwd: 'build/js/',
                    src: ['**'],
                    dest: destPath + '/js/'
                }]
            },
            cssmin: {
                expand: true, 
                cwd: 'build/cssmin/',
                src: ['**'],
                dest: destPath + 'mincss/'
            },
            jsmin: {
                expand: true, 
                cwd: 'build/jsmin/',
                src: ['**'],
                dest: destPath + 'minjs/'
            }
        },
		watch: {
			scripts: {
				files: ['js/**/*.js', 'scss/**/*.scss'],
				tasks: ['dev'],
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.loadNpmTasks("grunt-jscs");
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-newer');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('dev', [
		'newer:concat',
		'newer:jscs',
		'newer:uglify',
		'sass:dev',
		'newer:cssmin',
		'newer:copy'
	]);
    
	
	grunt.registerTask('prod', [
		'concat',
		'jscs',
		'uglify',
		'sass:prod',
		'cssmin',
        'copy'
	]);
	
	grunt.registerTask('default', ['watch']);
}