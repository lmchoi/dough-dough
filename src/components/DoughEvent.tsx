import {LoafRecord} from './LoafRecord';

export class DoughEvent {
  static schema: Realm.ObjectSchema;
  id: number;
  name: string;
  creationDate: Date;
  record: LoafRecord;

  constructor(
    id: number,
    name: string,
    creationDate: Date,
    record: LoafRecord,
  ) {
    this.id = id;
    this.name = name;
    this.creationDate = creationDate;
    this.record = record;
  }
}

DoughEvent.schema = {
  name: 'DoughEvent',
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string',
    creationDate: 'date',
    record: 'LoafRecord',
  },
};
