# P2PMess

## Description

P2PMess is an attempt to create a open source peer-to-peer (P2P) communication platform like signal.

## Architecture

The architecture consists of:

- Server - Stores data like ids of peers for retrival by other peers.
- Peers - Peers communication with each other to send messages. 

Steps to establish a connection:

1. A peer requests the server a ID. The ID is obtained through other channels i.e meeting them in person, or other social media platforms.
2. The server sends the ID, and ways to communicate with the other peer.
3. The peer then uses this information to connect and communicate with the recipiant.

## Future Design considiration

- Currently signal does not hide IP address of peers or uses the central server to address this issue. It would be interesting to use a tor like system to gide the IP address.
- Communication will only occur if two peers are active. This is an attempt to ensure secure communcation. Although possiblity of using End-to-Encrpytion like signal or other protocols will be investigated later.



