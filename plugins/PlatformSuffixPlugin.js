const { access } = require('fs/promises');
const { constants } = require('fs');
const { resolve } = require('path');

const platform = 'android';  // hardcoded. should be specified by the build process

module.exports = {
    name: 'platformSuffix',
    setup(build) {
        if(!platform) {
            return;
        }

        // Intercept all import paths. We then check if a platform variant of 
        // this path exists. If it exists we change which file should be included
        build.onResolve({ filter: /.*/ }, async (args) => {
            let platformPath =  args.path.replace(/.([^.]*)$/, '.' + platform  + '.$1');

            try {
                platformPath = resolve(args.resolveDir, platformPath);
                await access(platformPath, constants.R_OK);
                args.path = platformPath;
            }
            catch {
                // args.path is unchanged, but return a full path instead
                args.path = resolve(args.resolveDir, args.path)
            }
            
            return {
                path:  args.path,
                namespace: 'file',
            }
        });
    },
};