const fs = require('fs');
const path = require('path');

module.exports = {
    monorepo: {
        mainVersionFile: 'package.json', // or `lerna.json`, or whatever a json file you can read the latest `version` from.
        packagesToBump: ['packages/*'],
        packagesToPublish: ['packages/*'],
    },
    versionUpdated: ({ version, releaseType, dir, exec }) => {
        // update `lerna.json`
        const lernaConfigPath = path.resolve(dir, 'lerna.json');
        const lernaConfig = JSON.parse(fs.readFileSync(lernaConfigPath).toString());
        lernaConfig.version = version;
        fs.writeFileSync(lernaConfigPath, JSON.stringify(lernaConfig, null, 2));

        // update dependencies (if you're using yarn workspace)
        exec(`yarn workspace example-foo add my-lib@${version}`);
        exec(`yarn workspace example-bar add my-lib@${version}`);
    },
};