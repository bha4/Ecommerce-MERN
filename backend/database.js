const mongoose = require("mongoose");
const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_LOCAL_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((result) =>
      console.log(`mongodb is connected ${result.connection.host}`)
    )
    .catch((error) => {
      console.log(error);
    });
};

module.exports = connectDatabase;
