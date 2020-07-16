import Sequelize from "sequelize";
import connection from "../../../../shared/config/database";

const User = connection.define("users", {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// User.sync({ force: true });

export default User;
