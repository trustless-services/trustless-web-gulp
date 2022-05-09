# Trustless-web-gulp

Generates HTML files for Trustless Services site. Follow instructions to build:

## Instructions

`npm install -g gulp` if gulp is not on your system.

`npm install` to install, `gulp ejs` to build HTML files.

## Troubleshooting

If `gulp deploy` produces the following error message, it's because `gulp-gh-deploy` uses an old version of `gift` that cannot parse PGP-signed git commits properly.

```
  ref1 = /^.+? (.*) (\d+) .*$/.exec(line), m = ref1[0], actor = ref1[1], epoch = ref1[2];
  TypeError: Cannot read property '0' of null
```

Go into `node_modules/gulp-gh-pages/package.json`, edit so that `"gift": "^0.10.2"`, and `npm install`.