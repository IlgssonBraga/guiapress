import Sequelize from "sequelize";
import connection from "../../../../shared/config/database";

const Category = connection.define("categories", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

export default Category;
