const server = require('./src/app.js');
const { conn } = require('./src/db.js');

const port = process.env.PORT; //Esto es importantisimo, ya que Railway usa la variable PORT


conn.sync().then(() => {
    server.listen(port, () => {
      console.log(`%s listening at ${port}`);
    });
});