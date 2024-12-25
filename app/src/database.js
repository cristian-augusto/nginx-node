import mysql from "mysql2/promise";

const getConnection = async () => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  return connection;
};

export const insertNewName = async (name) => {
  const connection = await getConnection();
  const query = "INSERT INTO people (name) VALUES (?)";
  await connection.execute(query, [name]);
  await connection.end();
};

export const getAllNames = async () => {
  const connection = await getConnection();
  const [result] = await connection.query("SELECT * FROM people");
  await connection.end();
  return result.map((record) => record.name);
};
