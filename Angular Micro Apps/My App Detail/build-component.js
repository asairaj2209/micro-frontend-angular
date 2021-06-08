const fs = require('fs-extra');
const concat = require('concat');

build = async () => {
    const jsFiles = [
        './dist/my-app-detail/runtime.js',
        // './dist/my-app-detail/polyfills.js',
        // './dist/my-app-detail/es2015-polyfills.js',
        './dist/my-app-detail/main.js',
        './dist/my-app-detail/scripts.js'
    ];

    const cssFile = [
        './dist/my-app-detail/styles.css'
    ];

    await fs.ensureDir('my-app-detail-widget');
    await concat(jsFiles, 'my-app-detail-widget/my-app-detail-widget.js');
    await concat(cssFile, 'my-app-detail-widget/my-app-detail-widget.css');
}
build();