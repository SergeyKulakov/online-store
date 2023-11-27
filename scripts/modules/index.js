const path = require("path");
const fs_node = require("fs");

const iosModulesPath = path.resolve(__dirname, 'ios');
const androidModulesPath = path.resolve(__dirname, 'android');
const nodeModulesPath = path.resolve(
  __dirname,
  '..',
  '..',
  'node_modules',
  '@brandingbrand',
  'flagship',
  'src',
  'lib',
  'modules'
);

function moveFiles(platformPath, platform) {
  fs_node.readdir(platformPath, function (err, files) {
    if (err) {
      console.error('Could not list the directory.', err);
      process.exit(1);
    }

    files.forEach(function (file, _) {
      if (file.endsWith('.js')) {
        const origin = path.join(platformPath, file);
        const destination = path.join(nodeModulesPath, platform, file);

        fs_node.copyFile(origin, destination, function (error) {
          if (error) {
            console.error('Could not move the file to modules folder', err);
            process.exit(1);
          }
        });
      }
    });
  });
}

moveFiles(androidModulesPath, 'android');
moveFiles(iosModulesPath, 'ios');
