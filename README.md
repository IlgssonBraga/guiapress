# Blog with adm panel using Node.js with EJS

<p align="center">
  <img src="https://blog.mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png" alt="blog" width="500"/>
</p>

[![NPM Version](https://img.shields.io/npm/v/npm.svg?style=flat)](https://www.npmjs.com/)
[![NPM License](https://img.shields.io/npm/l/all-contributors.svg?style=flat)](LICENSE.md)

# :page_with_curl: About

This project is a blog with adm panel using the Node.js renderer for
static files. Users can CRUD categories and articles using mysql database and display the data in HTML pages.

# :wrench: Technologies used

<ul>
  <a href="https://nodejs.org/en//"><li>Node.js</li></a>
  <a href="https://expressjs.com"><li>Express</li></a>
  <a href="https://www.npmjs.com/package/nodemon"><li>Nodemon</li></a>
  <a href="https://www.npmjs.com/package/sucrase"><li>Sucrase</li></a>
  <a href="https://www.npmjs.com/package/body-parser"><li>Body parser</li></a>
  <a href="https://www.npmjs.com/package/express-session"><li>Express Session</li></a>
  <a href="https://www.tiny.cloud/"><li>Tinymce</li></a>
  <a href="https://www.npmjs.com/package/bcrypt"><li>Bcryptjs</li></a>
  <a href="https://www.npmjs.com/package/slugify"><li>Slugify</li></a>
  <a href="https://ejs.co/"><li>Ejs</li></a>
  <a href="https://sequelize.org/"><li>Sequelize</li></a>
  <a href="https://www.docker.com/"><li>Docker</li></a>
  
</ul>

# :hammer: How to run

In this project, i used [mysql](https://hub.docker.com/_/mysql/) in a [docker](https://www.docker.com/) container.
To install docker just follow the steps [here](https://docs.docker.com/get-docker/).
After this, run:

```
$ docker run --name name_blog -e MYSQL_ROOT_PASSWORD=your_password -p 3306:3306 -d mysql
```

Now, clone this repo, install all dependencies and run the server:

```
$ git clone https://github.com/IlgssonBraga/guiapress.git
$ cd guiapress
[guiapress]$ npm install
[guiapress]$ npm run dev
```

Now, enjoy!!! :rocket::rocket:

# :memo: License

This project is under MIT license. Look [License](LICENSE.md) for more details!

---

Made by [Ilgsson Braga](https://github.com/IlgssonBraga) with :heart:
