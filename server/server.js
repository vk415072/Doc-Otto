// 51. importing from socket.io which is actually a function
// 52. socket.io is actually a function so first thing you will pass is the port where you will run your code.
// 53. i.e, 3001. Our client is on port 3000.
// 54. since our client and sever are on diff URLs, we will use CORS here.
// 55. CORS: Cross Origin Request Support. This allows us to make req from diff URL to a diff URL.
const io = require('socket.io')(3001, {
    cors: {
        // 56. all we have to specify origin where our actual client is
        origin: "http://localhost:3000",
        // 57. and we need to specify what methods we are going to allow to go through.
        // 58. in our case we are allowing GET and POST req.
        methods: ['GET', 'POST']
    },
})
// 59. now this io object will allow us to do our connections
// 60. every time our client connects, it's going to run this io connection.
// 70. and it will give us this socket
io.on('connection', socket => {
    // 106. listening to the changes/delta by quill from client
    socket.on('send-changes', delta => {
        // 107. this will log all the changes bought by the delta from quill sent to us with a location also.
        // console.log(delta)
        // 108. now actually sending the changes back to other clients and passing the delta in it.
        // 109. so it is broadcasting the changes to every one else except us on our current socket.
        socket.broadcast.emit('receive-changes', delta)
    })

    // 71. this io is how we communicate back to our client
    console.log('connected!!!')
})
// 72. but right now we can't make any connections as our client isn't making a connection.
// 73. so in client folder, npm i socket.io-client
// 74. now follow along in client/Editor.js
