import {DoughEvent} from './DoughEvent';

export class LoafRecord {
  static schema: Realm.ObjectSchema;
  id: number;
  name: string;
  creationDate: Date;
  steps: DoughEvent[];

  constructor(id: number, name: string, creationDate: Date) {
    this.id = id;
    this.name = name;
    this.creationDate = creationDate;
    this.steps = [];
  }
}

LoafRecord.schema = {
  name: 'LoafRecord',
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string',
    creationDate: 'date',
    steps: {
      type: 'linkingObjects',
      objectType: 'DoughEvent',
      property: 'record',
    },
  },
};
