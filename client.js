const net = require('net')
const client = net.connect(9090)

process.stdin.on('data', data => client.write(data))
client.on('data', data => process.stdout.write(data))

