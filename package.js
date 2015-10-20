Package.describe({
  name:    'localforage',
  version: '0.0.1',
  summary: "Offline storage, improved. Wraps IndexedDB, WebSQL, or localStorage using a simple but powerful API."
});

Package.on_use(function (api) {
  api.use('promise');  

  api.addFiles('drivers/indexeddb.js', 'web.cordova');
  api.addFiles('drivers/localstorage.js', 'web.cordova');
  api.addFiles('drivers/websql.js', 'web.cordova');
  api.addFiles('localforage.js', 'web.cordova');

  api.export('localForage', 'web.cordova');
});
