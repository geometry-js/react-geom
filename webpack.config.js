module.exports={
    entry: '.\\public\\app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        extensions: ['.','.js', '.jsx']
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                query: {
                    presets:['@babel/env', '@babel/react']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    }
};