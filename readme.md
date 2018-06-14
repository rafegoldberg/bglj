Berkley Journal of Gender, Law, & Justice
===

## To Do

_Check out our **[To Do list](./todo.md)** at the link._

## Further Details

<details>
<summary>
  <em>Assorted notes and thoughts, collected thru the development process.</em>
</summary>

## Set Up

#### Wordpress

You need a local Wordpress install to connect to. This is how I do it:

1. [Install XAMPP](https://www.apachefriends.org/index.html) (or [MAMP](https://www.mamp.info/en/))
2. Launch XAMPP and start the server
3. Download [Wordpress core]()
4. Unzip the core in to the `www/` directory in the XAMPP server
5. Open the new Wordpress directory in your browser
6. Follow the Wordpress install

#### Git

The repo is actually just a Wordpress theme (with a little bit of NodeJS magic.) To use it, we'd install it thusly:

1. Start XAMPP and `cd` to `wp-content/themes` within our new WP install (see prior section)
2. In the `themes` directory `mkdir BGLJ`
3. Then `clone git@github.com:rafegoldberg/bglj.git BGLJ` (or use your Git client of choice)
4. Now `cd` in to the new `BGLJ` theme directory
5. And run `yarn install` (NPM will probably work as well...)

## Miscellaneous

#### Setting the Base URL

The app's base URL is configured within the following files:

- `vue.config.js`
- `@/includes/use.router.js`
- `@/includes/WpApi.js`

</details>