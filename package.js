Package.describe({
  name:    'localforage',
  version: '0.0.1',
  summary: "Offline storage, improved. Wraps IndexedDB, WebSQL, or localStorage using a simple but powerful API."
});

Package.on_use(function (api) {
  api.add_files('drivers/indexeddb.js', 'web.cordova');
  api.add_files('drivers/localstorage.js', 'web.cordova');
  api.add_files('drivers/websql.js', 'web.cordova');  
  api.add_files('localforage.js', 'web.cordova');

  api.export('localForage', 'web.cordova');
});
