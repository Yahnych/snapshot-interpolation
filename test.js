const { SnapshotInterpolation } = require('./lib/index')

const SI = new SnapshotInterpolation()

const worldState = [{ id: 1234 }]

const snapshot = SI.snapshot.create(worldState)

SI.vault.add(snapshot)

console.log(snapshot.time)

SI.vault.get(snapshot.time, true)
