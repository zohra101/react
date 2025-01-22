export default {
    //MODULES ARE CODE/FILES THAT ARE IMPORTED
    module:{
        //RULES ARE A LIST OF WAYS TO PROCESS THE MODULES
         rules: [
            {   
                exclude: /\.(scss|css)/,  //DON'T COMPILE STYLE MODULES
                use: "babel-loader",//USE THIS LOADER TO COMPILE ALL OTHER MODULES
            },
            {   
                test: /\.(scss|css)/, //COMPILE STYLE NODULES
                use: ["style-loader", "css-loader", "sass-loader"], //USE THIS LOADER TO COMPLILE STYLE MODULES
            },
        ],
    },
    watch: true, //WATCH FOR CHANGES. PRESS CTRL+C TO CANCEL AND RETURN TO CLI. 
    watchOptions: { aggregateTimeout: 1000}, //GIVES WEBPACK MORE TIME TO COMPILE & PREVENTS BUILD ERRORS
    mode: "development", //ENABLES THE DEBUGGER
    devtool: "source-map",//ENABLES THE DEBUGGER CODE TO MATCH ACTUAL CODE
};