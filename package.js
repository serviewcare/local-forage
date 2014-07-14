Package.describe({
  version: '0.0.0',
  summary: "Offline storage, improved. Wraps IndexedDB, WebSQL, or localStorage using a simple but powerful API."
});

Package.on_use(function (api) {
  api.add_files('drivers/indexeddb.js', 'client');
  api.add_files('drivers/localstorage.js', 'client');
  api.add_files('drivers/websql.js', 'client');
  api.add_files('localforage.js', 'client');

  //api.export('$', 'client');
});