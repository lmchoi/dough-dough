export class DoughEvent {
  static schema: Realm.ObjectSchema;

  name: string;
  creationDate: Date;

  constructor(name: string, creationDate: Date) {
    this.name = name;
    this.creationDate = creationDate;
  }
}

DoughEvent.schema = {
  name: 'DoughEvent',
  properties: {
    name: 'string',
    creationDate: 'date',
  },
};
