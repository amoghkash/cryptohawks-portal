import { readFile, writeFile } from 'fs';
import { generate } from 'build-number-generator'

console.log('Incrementing build number...');
readFile('src/assets/metadata.json',function(err,content) {
    if (err) throw err;
    var metadata = JSON.parse(content);

    var currentbuild = metadata.version+"."+metadata.revMajor +"."+metadata.revMinor
    metadata.buildNumber = generate();
    metadata.buildTag="Beta"
    writeFile('src/assets/metadata.json',JSON.stringify(metadata),function(err){
        if (err) throw err;
        console.log(`Build: ${metadata.version}.${metadata.revMajor}.${metadata.revMinor}.${metadata.buildNumber} ${metadata.buildTag}`);
    })
});