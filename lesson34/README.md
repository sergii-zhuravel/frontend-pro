1. HTTP/S VS WS/S(WebSocket). How we can emulate fetching new data with HTTP?
2. What is echo WS server, show examples. Our server can sleep sometime (so refresh or reconnect)
3. WS events: 
open – соединение установлено,
message – получены данные,
error – ошибка,
close – соединение закрыто.
4. Send messages => ws.send(data). Data is string.
5. How to send and receive objects (JSON.stringify/parse)
6. Format of messages we send via WS
{
    type: "message_type",
    payload: "data that we need to send, can be complex object"
}
7. 

Additional info (if we have time)
1. Show wa-server-example (example of a very simple WS server with NodeJS)
2. show nodemon (install it globally)

HW
Create simple chat app that uses our echo WS server. The app should have 2 inputs (first input for the user login and second input for a message), button to send the message. Under these inputs should be a block (play with HTML templates and CSS to create something good looking) that displays received messages from WS connection. On message send - clean only input with old message. 

Format of the message:
```
{
    type: "message",
    payload: {
        username: "John",
        message: "Hellow World"
    }
}
```

Additional requirements:
the app should be NPM package.
code should be spletted into separate files:
api.js - all work with WS (functional or OOP)
app.js - work with DOM, use the api.js
The project should be built with Webpack

