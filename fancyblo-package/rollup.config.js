import {terser} from "rollup-plugin-terser";
import scss from "rollup-plugin-scss";
import pkg from "./package.json";

export default{
    input:"source/mainsass/index.js",
    plugins:[
        terser(),
        scss({
            output:"package/dist/fancyblo.min.css",
            outputStyle:"compressed"
        }),
    ],
    output:[
        {
            name:"fancyblo",
            file:pkg.browser,
            format:"umd",
        },
        {
            file:pkg.module,
            format:"es"
        },
    ],
};
