import { readFile, writeFile } from 'fs';
import { generate } from 'build-number-generator'

console.log('Incrementing build number...');
readFile('src/assets/metadata.json',function(err,content) {
    if (err) throw err;
    var metadata = JSON.parse(content);

    var currentbuild = metadata.version+"."+metadata.revMajor +"."+metadata.revMinor
    console.log(currentbuild)
    metadata.revMinor= metadata.revMinor +1
    metadata.buildNumber = generate();
    metadata.buildTag = "Beta Release"
    writeFile('src/assets/metadata.json',JSON.stringify(metadata),function(err){
        if (err) throw err;
        console.log(`Build: ${metadata.version}.${metadata.revMajor}.${metadata.revMinor}.${metadata.buildNumber} ${metadata.buildTag}`);
    })
});