# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.4.0](https://github.com/lorransouzaaguiar/online-menu/compare/backend@0.3.3...backend@0.4.0) (2022-07-26)


### Features

* adds dynamic product image functionality to the project ([1f9683a](https://github.com/lorransouzaaguiar/online-menu/commit/1f9683a42ed3b99edcc85d71eb0a37d7d3839957))





## [0.3.3](https://github.com/lorransouzaaguiar/online-menu/compare/backend@0.3.2...backend@0.3.3) (2022-07-13)

**Note:** Version bump only for package backend





## [0.3.2](https://github.com/lorransouzaaguiar/online-menu/compare/backend@0.3.1...backend@0.3.2) (2022-07-13)


### Bug Fixes

* change cart quantity increment and decrement return for cart object ([760976a](https://github.com/lorransouzaaguiar/online-menu/commit/760976a8f70a192afebfcea8f884bd17348c452d))





## 0.3.1 (2022-06-29)

**Note:** Version bump only for package backend





# [0.3.0](https://github.com/lorransouzaaguiar/online-menu/compare/backend@0.2.0...backend@0.3.0) (2022-06-29)

### Bug Fixes

-   fix json attributes when fetching all categories ([a7a380e](https://github.com/lorransouzaaguiar/online-menu/commit/a7a380e5589c4cdb57a680f070f384fd563e5fb0))
-   fix json attributes when fetching all products by categories ([33e7686](https://github.com/lorransouzaaguiar/online-menu/commit/33e76867a643f1c940d728fc46d00ce6a9143209))
-   fix json attributes when fetching products ([1686212](https://github.com/lorransouzaaguiar/online-menu/commit/168621241c18915cafe4ca211b467a199021a354))
-   fixes status code 500 error when updating and deleting categories ([0a49a5b](https://github.com/lorransouzaaguiar/online-menu/commit/0a49a5b4d56fc382e143626217762d54c35813d7))
-   fixes status code 500 error when updating and deleting products ([6a6ebec](https://github.com/lorransouzaaguiar/online-menu/commit/6a6ebec5f417b5e53e0a104763a01e87797e3a30))

### BREAKING CHANGES

-   before the api endpoint of categories returned the attributes category_id and description_id. Now
    attributes have been changed to id and description

-   before the api endpoint of categories returned the attributes of products coming from the database. Now the product attributes have been changed to id, title, price, qty, description

-   before the api endpoint of products returned the id of the category when fetching the product. Now the api returns the entire category

# [0.2.0](https://github.com/lorransouzaaguiar/online-menu/compare/backend@0.1.1...backend@0.2.0) (2022-06-28)

### Features

-   add cart module ([f24c9fe](https://github.com/lorransouzaaguiar/online-menu/commit/f24c9fe03fa981e25f0404802ccff3340ecf6d42))
-   add category controller ([e009820](https://github.com/lorransouzaaguiar/online-menu/commit/e009820c2177d7d6e9ffd582506bac2b638550eb))
-   add category router ([f969ef5](https://github.com/lorransouzaaguiar/online-menu/commit/f969ef53ab74ab593e36da0ddce2ef2af0ff77c0))
-   add database migrations and seeds ([3a0d3fe](https://github.com/lorransouzaaguiar/online-menu/commit/3a0d3fef0898438d3bdc1d3a389f74cc03779f1b))
-   add http response ([454961d](https://github.com/lorransouzaaguiar/online-menu/commit/454961dd35a849bd1b39b1dfc86d98a26d665829))
-   add initial server ([82113f9](https://github.com/lorransouzaaguiar/online-menu/commit/82113f9571d5975239679ace36c9defc428d2c0a))
-   add knex config to connect database ([68bf638](https://github.com/lorransouzaaguiar/online-menu/commit/68bf63891e1e7aa4a42c3fc20302a5db64887cb7))
-   add product controller ([22dce20](https://github.com/lorransouzaaguiar/online-menu/commit/22dce203f15ce4967114e8aae7f140925e316c74))
-   add product router ([4153d58](https://github.com/lorransouzaaguiar/online-menu/commit/4153d587e750c6b5d83aecdd7af313806ac62db8))

## [0.1.1](https://github.com/lorransouzaaguiar/online-menu/compare/backend@0.1.0...backend@0.1.1) (2022-06-08)

**Note:** Version bump only for package backend

# [0.1.0](https://github.com/lorransouzaaguiar/online-menu/compare/backend@0.0.1...backend@0.1.0) (2022-06-06)

### Features

-   add initial server ([f314977](https://github.com/lorransouzaaguiar/online-menu/commit/f31497767f0424ca9b166cfe4923fe2f59ea50eb))

## 0.0.1 (2022-06-06)

**Note:** Version bump only for package backend
