# P2PMess

## Description

P2PMess is an attempt to create a open source peer-to-peer (P2P) communication platform like signal.

## Architecture

The architecture consists of:

- Server - Stores data like ids of peers for retrival by other peers.
- Peers - Peers communication with each other to send messages. 

Steps to establish a connection:

1. A peer requests the server a peer communication details using an ID. The ID is obtained through other channels i.e meeting them in person, or other social media platforms.
2. The server sends the peer details needed to establish a communication.
3. The peer then uses this information to connect and communicate with the recipiant.

## Future Design considiration

- Currently signal does not hide IP address of peers or uses the central server to address this issue. It would be interesting to use a tor like system to gide the IP address.
- Communication will only occur if two peers are active. This is an attempt to ensure secure communcation. Although possiblity of using End-to-Encrpytion like signal or other protocols will be investigated later.

## Requirements 

### Server
| Functional|
| Requirement | Description | Complete |
|----|-------------|----------|
| Store peer details | The server should store the ID of the peers to be collected in the future|  |
| Fetch details | Upon peer first running, it will send the server with an ID | |

### Peer
| Functional|
| Requirement | Description | Complete |
|----|-------------|----------|
|Create account| When first using the app, an account (with an ID) needs to be setup| |
|Store details | peer information, like connection and id needs to be sent and stored to the server | |
|Fetch peer details | When wanting to connect, use ID to obtain comm details| |
|comms with peers | the peer needs to be able to establish, send and recive comms from other peers | | 
| interface | Peer should have an interface to communicate with other peers | |
|Check if peer is living | the peer should also keep checking if other peer is still active in the communication | | 



