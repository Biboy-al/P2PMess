import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  connectPeer():Number{
    return Math.random();
  }

  getConnectionDetails():ConnectionData{
    return new ConnectionData();
  }
}

class ConnectionData{
  connectionId: Number = 0;
}
