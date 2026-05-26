# Changelog

## Updates
- **Password Eye Icon**: Updated `.form-group` in `style.css` to use `display: flex;` and `align-items: center;`. This pushes the password eye icon properly to the end of the line alongside the password input field. Also fixed the CSS selector for the eye icon from `#eye i` to `#eye` so the styles actually apply.
- **Link Positioning**: Added a new `.text` class in `style.css` with `display: flex;` and `justify-content: space-between;` to push the "Forgot Password" and "Create an account" links to opposite sides of the login button.
- **Style Preservation**: Intentionally retained the default blue link color and some of the original code spacing to mimic the original student's format.
- **Simple Login Functionality**: Added `app.js` with a basic jQuery script to handle form submission. It prevents default page reload and shows a simple `alert()` for either a success or an empty field error.
- **Toggle Password Visibility**: Implemented a click event on the eye icon in `app.js` to toggle the password field between `password` and `text` types, as well as changing the FontAwesome icon.
- **Admin Authentication**: Updated `app.js` login logic to check if both the username and password are exactly "admin". Displays a unique welcome alert if true, otherwise logs in as a "normal user".
- **Removed Sign-up/Recovery**: Removed the "Forgot password?" and "Create an account" links from `index.html` to simplify the project, as there is no backend database to manage accounts.
- **Website Expansion**: Added `home.html`, `products.html`, `product-detail.html`, `admin.html`, and `contact.html` to build out the full application structure, complete with a shared `.navbar` added to `style.css`.
- **Registration Mockup**: Built a simple `register.html` page connected to a new jQuery submission handler in `app.js` that verifies password confirmations.
