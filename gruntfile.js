/*build commands
    devlopment build --> grunt || grunt dev
    watch --> grunt watch
    production build --> grunt prod
*/

module.exports = function(grunt){
    var scriptPath = 'js/';
    var destPath = 'etc/designs/hcc/';
    var customScript = [
        scriptPath+'script.js'
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
					'build/js/hcc.js': 'build/js/hcc.js'
				}
			}
		},
		concat : {
			dist : {
				files: {
	//				 destPath + 'globaljs/js/hcc.js': [ libJs, customScript ],
					'build/js/hcc.js': [ libJs, customScript ]
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
/*        copy: {
            css: {
                files: [{
                    expand: true, 
                    cwd: 'build/css/',
                    src: ['**'],
                    dest: destPath + 'globalcss/css/'
                }]
            },
            js: {
                files: [{
                    expand: true, 
                    cwd: 'build/js/',
                    src: ['**'],
                    dest: destPath + 'globaljs/js/'
                }]
            }
        },
*/
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



	grunt.registerTask('dev', [
		'newer:concat',
		'newer:jscs',
		'sass:dev',
        'newer:copy'
	]);
    
	
	grunt.registerTask('prod', [
		'concat',
		'jscs',
		'uglify',
		'sass:prod',
        'copy'
	]);
	
	grunt.registerTask('default', ['watch']);
}