# Point of Sale Application Using React, JavaScript and CSS

# All dependencies for front-end

- Used Bootstrap 3.4.1 and React-Bootstrap 0.31.5 instead fo Bootstrap 4 and React-Bootstrap 1.0.0.1 cause it interfered with the page styling and because bootstrap 4 does not have glyphicons while bootstrap 3 does
- Used moment for tracking dates for transactions made
- Used axios to link back-end to front-end

# All dependencies for back-end

- Nedb: NeDB is much like SQLite in that it is a smaller, embeddable version of a much larger database system.NeDB is a smaller NoSQL datastore that mimics MongoDB.

- Socket.io: Socket.IO enables real-time bidirectional event-based communication. It works on every platform, browser or device, focusing equally on reliability and speed.

- Express: Express is a Fast, unopinionated, minimalist web framework for Node.js. express features will enable us to create our web server.

- Nodemon: Nodemon checks for changes in your source and automatically restart your server.

- Body-parser: body-parser extract the entire body portion of an incoming request stream and exposes it on req.body .

- HTTP: Http allows Node.js to transfer data over the HyperText Transfer Protocol (HTTP).

- Concurrently: to start up both back end and front-end at the same time

# Links for all dependencies

- Nedb: [NeDB](https://stackabuse.com/nedb-a-lightweight-javascript-database/)
- Socket.io: [Socket.io](https://www.npmjs.com/package/socket.io)
- Express: [Express](https://www.npmjs.com/package/express)
- Nodemon: [Nodemon](https://www.npmjs.com/package/nodemon)
- Body-parser: [Body-parser](https://www.npmjs.com/package/body-parser)
- HTTP: [HTTP](https://www.npmjs.com/package/http)
- Concurrently: [Concurrently](https://www.npmjs.com/package/concurrently)
- BootStrap 3: [Bootstrap](https://www.npmjs.com/package/bootstrap3)
- Moment: [Moment](https://www.npmjs.com/package/moment)
- Axios: [Axios](https://www.npmjs.com/package/axios)
- React-Bootstrap-0.31.5: [React-Bootstrap-0.31.5](https://www.npmjs.com/package/react-bootstrap/v/0.31.5)

# Problems that I could not fix or figure out

- When you choosing a item in additem modal for cart you have to chose the second item first, add it, delete it and then you can only add the first item cause if you chose the first item the name won't show when its in cart and transactions
- Could not figure out how to add the price of item automatically to price input when item is choosen in Name selecter input so you have to type out price instead
- LiveCart will only show the current transaction being made only after its made
