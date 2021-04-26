export function pluralize(name, count) {
  if (count === 1) {
    return name
  }
  return name + 's'
}

export function idbPromise(storeName, method, object) {
  // finish writing - connects to src/components/index.js
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open('threadSHARE', 1);

    // create variables to hold reference to db, transaction, and object store
    let db, tx, store;

    // updated version or first time using db
    request.onupgradeneeded = function (e) {
      const db = request.result;
      db.createObjectStore('products', { keyPath: '_id' });
      db.createObjectStore('cart', { keyPath: '_id' });
    };

    request.onerror = function (err) {
      console.log(err);
    };

    request.onsuccess = function (e) {
      //save referece of database
      db = request.result;
      // open transction, then do the action passed into storeName
      tx = db.transaction(storeName, 'readWrite');
      // save reference (of that database) to the object store
      store = tx.objectStore(storeName);

      db.onerror = function (e) {
        console.log(e);
      };

      switch (method) {
        case 'put':
          store.put(object);
          resolve(object);
          break;
        case 'get':
          const everything = store.getAll();
          everything.onsucess = function () {
            resolve.apply(everything.result);
          };
          break;
        case 'delete': 
        store.delete(object._id);
        break;
        default: 
        console.log("Not a valid method.");
        break;
      }

      // close connection when transaction is complete
      tx.oncomplete = function () {
        db.close();
      };
    };


  });
}