'use strict';

import Realm from 'realm';
import {DoughEvent} from '../components/DoughEvent';
import {LoafRecord} from '../components/LoafRecord';

const realm = new Realm({
  schema: [LoafRecord.schema, DoughEvent.schema],
  // deleteRealmIfMigrationNeeded: true,
});

class Repository {
  loadLoafRecord(loafRecordId: number): LoafRecord {
    return realm.objectForPrimaryKey<LoafRecord>('LoafRecord', loafRecordId)!;
  }

  loadLoafRecords = (): Realm.Results<LoafRecord> => {
    return realm.objects('LoafRecord');
  };

  saveLoafRecord(loafRecord: LoafRecord) {
    realm.write(() => {
      realm.create('LoafRecord', loafRecord);
    });
  }

  loadDoughEvents = (): Realm.Results<DoughEvent> => {
    return realm.objects('DoughEvent');
  };

  saveDoughEvent(event: {
    name: string;
    creationDate: Date;
    loafRecord: LoafRecord;
  }) {
    realm.beginTransaction();
    const events: Realm.Results<DoughEvent> = realm.objects('DoughEvent');
    const maxId = events.length > 0 ? events.sorted('id', true)[0].id : null;
    const nextId = maxId != null ? maxId + 1 : 0;
    realm.create(
      'DoughEvent',
      new DoughEvent(nextId, event.name, event.creationDate, event.loafRecord),
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
