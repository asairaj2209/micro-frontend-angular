const fs = require('fs-extra');
const concat = require('concat');

build = async () => {
    const jsFiles = [
        './dist/my-app/runtime.js',
        // './dist/my-app/polyfills.js',
        // './dist/my-app/es2015-polyfills.js',
        './dist/my-app/main.js',
        './dist/my-app/scripts.js'
    ];

    const cssFile = [
        './dist/my-app/styles.css'
    ];

    await fs.ensureDir('my-app-widget');
    await concat(jsFiles, 'my-app-widget/my-app-widget.js');
    await concat(cssFile, 'my-app-widget/my-app-widget.css');
}
build();