
Package.describe({
  name: 'wirddin:gifplayer',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Meteor package for GifPlayer: A tool to play and pause GIFs.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/AbhishekBiswal/gifplayer',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles(
    [
      'lib/client/gifplayer.css',
      'lib/client/gifplayer.js'
    ],
    'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('wirddin:gifplayer');
  api.mainModule('gifplayer-tests.js');
});
