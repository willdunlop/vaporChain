/**
* This file is being used to experiment with OrbitDB
* Shits looking pretty good, just need to do a proper
* implementation and she's good. 
*/

const IPFS = require('ipfs')
const OrbitDB = require('orbit-db')

// OrbitDB uses Pubsub which is an experimental feature
// and need to be turned on manually.
// Note that these options need to be passed to IPFS in
// all examples even if not specfied so.
const ipfsOptions = {
  EXPERIMENTAL: {
    pubsub: true
  },
}

// Create IPFS instance
const ipfs = new IPFS(ipfsOptions)

ipfs.on('error', (e) => console.error(e))
ipfs.on('ready', async () => {
  // Create a database
  const orbitdb = new OrbitDB(ipfs)
  const db = await orbitdb.keyvalue('vaporChain')
  // Add an entry to the database
  const hash = await db.put('chat', [{
    user: "Bill",
    message: "Hi there VaporChain!",
    time: Date.now()
  }]);
  // Retrieve chat array
  const latest = db.get('chat')

  // push new chat item
  latest.push({
    user: "Will",
    message: "Hi Bill!",
    time: Date.now()
  })
  //update the chat with the updated chat array
  const newHash = await db.put('chat', latest)

  const secLatest = db.get('chat')

  console.log('SECOND ENTRY', JSON.stringify(secLatest, null, 2))
})
