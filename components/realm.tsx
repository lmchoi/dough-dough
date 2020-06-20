'use strict';

import Realm from 'realm';

const DoughEvent: Realm.ObjectSchema = {
    name: 'DoughEvent',
    properties: {
        name: 'string',
        creationDate: 'date',
    }
}

export default new Realm({ schema: [DoughEvent] });