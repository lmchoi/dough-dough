'use strict';

import Realm from 'realm';
import {DoughEvent} from './DoughEvent';

const realm = new Realm({schema: [DoughEvent.schema]});

class Repository {
  loadDoughEvents = (): Realm.Results<DoughEvent> => {
    return realm.objects('DoughEvent');
  };

  saveDoughEvent(event: DoughEvent) {
    realm.write(() => {
      realm.create('DoughEvent', event);
    });
  }
}

export default new Repository();
