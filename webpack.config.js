const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractSCSS = new ExtractTextPlugin({
	filename: function(getPath) {
		return getPath('css.css');
	},
	allChunks: false
});
module.exports = {
	entry: {
		'module': './module.entry.js',
	},
	devtool: 'inline-source-map',
	output: {
		filename: ( (env = 'develop') => {
			let assignFilename = {
				'production': '[name].min.js',
				'develop': '[name].js'
			};
			return assignFilename[env];
		} )( process.env.NODE_ENV ),
		path: path.resolve(__dirname, './')
	},
	module: {
        rules: [
        	{
        		test: /\.js$/,
        		exclude: /(node_modules|bower_components)/,
        		use: [
	        		{
				        loader: 'babel-loader',
				        options: {
							presets: ['env']
				        }
				    }
			    ]
        	}, {
			      test: /\.html$/,
			      loader: "html-loader" // loaders: ['raw-loader']，這個方式也是可以被接受的。
			    },
	        {
	            test: /\.css$|\.scss$/,
	            use: ExtractSCSS.extract({
	                use: [
		                {
		                	loader: 'css-loader',
		                	options: {
		                		minimize: true,
		                		url: false
		                	}
		                },
		                {
		                	loader: 'sass-loader'
		                }
	                ],
	            })
	        }
        ]
    },
    plugins: ( (env = 'develop') => {
    	let defaultPlugins = [
    		ExtractSCSS
    	];
    	let envPlugins = {
    		'production': [
    			new UglifyJSPlugin({
					compress: {
						drop_console: true
					}
				})
    		],
			'develop': [
			 //      new HtmlWebpackPlugin({
			 //      	title: 'Hot Module Replacement - Demo'
			 //      }),
				new HtmlWebpackPlugin({
			      template: './preview.html',
			      title: 'ES6 v1.0.0 - Demo'
			    }),
    			new webpack.NamedModulesPlugin(),
				new webpack.HotModuleReplacementPlugin(),
			    new webpack.DefinePlugin({
			      'process.env.NODE_ENV': JSON.stringify('production')
			    })
			]
    	};
    	return defaultPlugins.concat(envPlugins[env]);
	} )( process.env.NODE_ENV )
};