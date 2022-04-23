import babel from '@rollup/plugin-babel';
import { Addon } from '@embroider/addon-dev/rollup';
import fs from 'fs';
import path from 'path';
import resolve from 'resolve';

const addon = new Addon({
  srcDir: 'src',
  destDir: 'dist',
});

export default {
  // This provides defaults that work well alongside `publicEntrypoints` below.
  // You can augment this if yсou need to.
  output: addon.output(),

  plugins: [
    generateEmberMdiIconsPlugin(),

    // These are the modules that users should be able to import from your
    // addon. Anything not listed here may get optimized away.
    addon.publicEntrypoints(['components/**/*.js']),

    // These are the modules that should get reexported into the traditional
    // "app" tree. Things in here should also be in publicEntrypoints above, but
    // not everything in publicEntrypoints necessarily needs to go here.
    addon.appReexports(['components/**/*.js']),

    // This babel config should *not* apply presets or compile away ES modules.
    // It exists only to provide development niceties for you, like automatic
    // template colocation.
    // See `babel.config.json` for the actual Babel configuration!
    babel({ babelHelpers: 'bundled' }),

    // Ensure that standalone .hbs files are properly integrated as Javascript.
    addon.hbs(),

    // addons are allowed to contain imports of .css files, which we want rollup
    // to leave alone and keep in the published output.
    addon.keepAssets(['**/*.css']),

    // Remove leftover build artifacts when starting a new build.
    addon.clean(),
  ],
};

function generateEmberMdiIconsPlugin() {
  const getDRegExp = /<path d="(.+)" \/>/;
  const svgsPath = path.join(
    path.dirname(resolve.sync(path.join('@mdi', 'svg', 'package.json'))),
    'svg'
  );
  const list = fs
    .readdirSync(svgsPath)
    .map((item) => path.basename(item, '.svg'));
  const icons = {};
  list.forEach((item) => {
    let data = fs.readFileSync(path.join(svgsPath, `${item}.svg`));
    icons[item] = getDRegExp.exec(data)[1]; //TODO: find a more simple way
  });
  const filePathPrefix = 'src/components/md-icon/';

  return {
    name: 'generate-ember-mdi-icons',
    buildStart() {
      for (const name in icons) {
        const d = icons[name];
        const fileName = `${name}.js`;
        const filePath = `${filePathPrefix}${fileName}`;
        const className = name
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join('');

        fs.writeFileSync(
          filePath,
          `import MdIcon from "ember-mdi/components/md-icon";\nexport default class ${className} extends MdIcon {get d(){return '${d}'}}`
        );
      }
    },
  };
}
