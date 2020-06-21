'use strict';

import Realm from 'realm';
import {DoughEvent} from './DoughEvent';

const realm = new Realm({
  schema: [DoughEvent.schema],
  deleteRealmIfMigrationNeeded: true,
});

class Repository {
  loadDoughEvents = (): Realm.Results<DoughEvent> => {
    return realm.objects('DoughEvent');
  };

  saveDoughEvent(event: {name: string; creationDate: Date}) {
    realm.beginTransaction();
    const events = realm.objects('DoughEvent');
    const maxId = events.length > 0 ? events.sorted('id', true)[0].id : null;
    const nextId = maxId != null ? maxId + 1 : 0;
    realm.create(
      'DoughEvent',
      new DoughEvent(nextId, event.name, event.creationDate),
    );
    realm.commitTransaction();
  }

  removeAll() {
    realm.write(() => {
      realm.deleteAll();
    });
  }

  close() {
    if (realm !== null && !realm.isClosed) {
      realm.close();
    }
  }
}

export default new Repository();
