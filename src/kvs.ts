import * as cassandra from 'cassandra-driver';
import { resolve } from 'path';

class KVSClinet {
  private client: cassandra.Client;

  constructor() {
    this.client = new cassandra.Client({
      contactPoints: ['h1', 'h2'],
      keyspace: 'ks1'
    });
  }

  async read() {
    const qeury = 'SELECT * from mydb';
    return this.client
      .execute(qeury)
      .then((resuleSet: cassandra.types.ResultSet) => {
        this.display('OK');
      })
      .catch(error => {
        this.display(error.name ?? 'ERROR');
        throw new Error("Failed to read data");
      });
  }

  display(data: string) {
    console.log(data);
  }
}

export default KVSClinet;
