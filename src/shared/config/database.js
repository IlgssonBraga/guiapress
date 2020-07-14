import Sequelize from "sequelize";

const connection = new Sequelize("guiapress", "ilgsson", "docker", {
  host: "localhost",
  dialect: "mysql",
  timezone: "-03:00",
});

export default connection;
