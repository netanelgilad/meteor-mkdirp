Package.describe({
  name: 'netanelgilad:mkdirp',
  summary: 'Recursively mkdir, like `mkdir -p`',
  version: '0.0.1',
  git: 'https://github.com/netanelgilad/meteor-mkdirp'
});

Npm.depends({
  'mkdirp' : '0.5.0'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0');
  api.addFiles('netanelgilad:mkdirp.js', 'server');

  api.export('mkdirp');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('netanelgilad:mkdirp');
  api.addFiles('netanelgilad:mkdirp-tests.js');
});
