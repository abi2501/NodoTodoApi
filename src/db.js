// Get the client
import mysql from "mysql2/promise";

// Create the connection to database
const connection = await mysql.createConnection({
  // host: "localhost",
  // user: "root",
  // password: "root",
  // database: "tododb",
  // host: "bffrulrlzht15svbzxgq-mysql.services.clever-cloud.com",
  // user: "uhimfojchgauenwc",
  // password: "qkQyG1oPizLcJ7pg3xao",
  // database: "bffrulrlzht15svbzxgq",
  // port: 3306,

  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 3306,
  waitForConnections: true,
});

const query = async (text, params) => {
  try {
    const [results, fields] = await connection.query(text, params);
    return results;
  } catch (err) {
    console.log(err);
  }
};

export default query;
