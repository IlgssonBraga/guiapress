import Sequelize from "sequelize";

const connection = new Sequelize("guiapress", "ilgsson", "docker", {
  host: "localhost",
  dialect: "mysql",
});

export default connection;
