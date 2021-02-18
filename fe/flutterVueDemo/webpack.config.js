var path = require('path');
var fs = require('fs');
const fs_extra = require('fs-extra');
var webpack = require('webpack');
var entry = {};
var chalk = require('chalk');
var less = require('postcss-less');
var WeexLiveReloadPlugin = require('./build/live-reload.js');
var ip = require('ip').address()
var port = '9000'


process.env.NODE_ENV = 'production';
if (process.argv[2] === '--watch') {
    process.env.NODE_ENV = 'development';
}

function walk(dir) {
    dir = dir || '.'
    var directory = path.join(__dirname, './src', dir);
    fs.readdirSync(directory)
        .forEach(function (file) {
            var fullpath = path.join(directory, file);
            var stat = fs.statSync(fullpath);
            var extname = path.extname(fullpath);

            var basename = path.basename(fullpath);
            if (stat.isFile() && (extname === '.we' || extname === '.vue') || basename === 'entry.js' || basename === 'entry-list.js' || basename === 'pages_config.json') {
                var name = path.join(dir, path.basename(file, extname));
                if (path.basename(fullpath) === 'entry.js' || path.basename(fullpath) === 'entry-list.js') {
                    entry[name] = fullpath;
                } else {
                    entry[name] = fullpath + '?entry=true';
                }

            } else if (stat.isDirectory()) {
                var subdir = path.join(dir, file);
                walk(subdir);
            }
        });
}

walk()

var bannerPlugin = new webpack.BannerPlugin({
    banner: '// { "framework": "Vue"} \n',
    raw: true,
    exclude: 'Vue'
})
var webpackPlugins = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        }
    }),
    new WeexLiveReloadPlugin({
        serverPort: port
    })
]
webpackPlugins.push(bannerPlugin);

var config = {
    stats: {
        colors: true,
        modules: false,
        reasons: false,
        warnings: false
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader'
                }],
                exclude: /node_modules(?!(\/|\\).*(weex).*)/,
            },
            {
                test: /\.vue(\?[^?]+)?$/,
                use: [{
                    loader: 'weex-loader',
                    options: {
                        loaders: {
                            sass: ['sass-loader'],
                            scss: ['sass-loader'],
                            less: ['less-loader'],
                            stylus: ['stylus-loader']
                        },
                        postcss: {
                            // weexCSS({ env: 'weex' }),
                            options: { syntax: less }
                        },
                        // compilerOptions: {
                        //     modules: [{
                        //         transformNode: (el, options) => { },
                        //         preTransformNode: (el, options) => { },
                        //         postTransformNode: (el, options) => precompile(el)
                        //     }
                        //     ]
                        // }
                    }
                }],
                exclude: /node_modules(?!\/.*(weex).*)/
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000000,
                        name: '[name].[ext]'
                    }
                }]
            },
            {
                test: /\.json$/,
                use: [{
                    loader: 'json-loader'
                }],
            }
        ]
    }
};

var weexConfig = Object.assign({}, config, {
    name: 'weexConfig',
    entry: entry,
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js'
    },
    plugins: webpackPlugins

});


module.exports = [
    weexConfig
];
