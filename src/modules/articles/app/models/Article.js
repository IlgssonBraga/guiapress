import Sequelize from "sequelize";
import connection from "../../../../shared/config/database";
import Category from "../../../categories/app/models/Category";

const Article = connection.define("articles", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  body: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

Category.hasMany(Article);
Article.belongsTo(Category);

// Article.sync({ force: true });

export default Article;
