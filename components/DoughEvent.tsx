export class DoughEvent {
  static schema: Realm.ObjectSchema;
  id: number;
  name: string;
  creationDate: Date;

  constructor(id: number, name: string, creationDate: Date) {
    this.id = id;
    this.name = name;
    this.creationDate = creationDate;
  }
}

DoughEvent.schema = {
  name: 'DoughEvent',
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string',
    creationDate: 'date',
  },
};
