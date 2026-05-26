# app.js Explanation

This document explains the Javascript code used in `app.js` to add interactivity to the login form. The code uses **jQuery**, a popular Javascript library that makes it easier to select HTML elements and handle events.

## 1. Document Ready Function
```javascript
$(document).ready(function() { ... });
```
This is a standard jQuery function that waits for the entire HTML document to completely load before running any of the Javascript code inside it. This is important because if the script runs before the HTML loads, it might try to interact with an element (like the form or the eye icon) that doesn't exist on the page yet, causing an error.

## 2. Password Visibility Toggle
```javascript
$('#eye').click(function() { ... });
```
This function listens for a "click" event on the HTML element with the ID `eye` (our FontAwesome eye icon). 

**How it works (The Logic):**
- It first grabs the password input field: `let input = $('#password');`
- It uses an `if/else` statement to check the current `type` attribute of the input field.
- **If the type is `'password'`** (meaning the text is hidden as dots): It changes the attribute to `'text'` so the user can see what they typed. It also updates the icon by removing the `fa-eye` class and adding the `fa-eye-slash` (crossed-out eye) class.
- **If the type is already `'text'`**: It changes the attribute back to `'password'` to hide the text again, and swaps the icon classes back to the regular eye.

## 3. Basic Login Validation
```javascript
$('#form-login').submit(function(e) { ... });
```
This function is triggered whenever the user attempts to submit the form, such as by clicking the "Sign In" button.

### Complicated Functions Explained:
- **`e.preventDefault();`**
  By default, submitting an HTML form causes the web browser to refresh or redirect the page. This line of code stops that default behavior so we can handle the login process entirely via Javascript without the page reloading.
- **`let username = $('.form-input').eq(0).val();`**
  Since the username input field in our HTML does not have a unique `id` attribute, we have to select it by its class name `.form-input`. However, there are two `.form-input` elements on the page (username and password). The `.eq(0)` function specifically selects the *first* matching element (programming indexes start at 0). Finally, `.val()` extracts the text the user actually typed into that field.

**The Validation Check:**
- The code uses `if (username === "" || password === "")`. The `||` symbol stands for "OR". It checks if the username string is completely empty OR if the password string is completely empty.
- If either field is missing, it triggers a browser popup saying `alert("Please input your username and password!");`.
- **Admin Check**: It then uses `else if (username === "admin" && password === "admin")`. The `&&` stands for "AND". If the user inputs exactly "admin" for both fields, it logs them in as the administrator.
- **Normal User**: If the fields are not empty, and the user isn't the admin, it falls back to the final `else` block and logs them in as a normal user: `alert("Login success! Hello " + username);`.

## 4. Registration Validation
```javascript
$('#form-register').submit(function (e) { ... });
```
This is the function that runs when the user tries to submit the "Đăng ký" (Register) form.

**The Logic:**
- Like the login form, it uses `e.preventDefault()` to stop the page from refreshing.
- It grabs the values of the `username`, `password`, and the new `confirm-password` fields.
- **Empty Check:** `if (username === "" || password === "" || confirm === "")` ensures no fields are left blank.
- **Match Check:** `else if (password !== confirm)` verifies that the password and the confirmation password are exactly the same. If not, it shows an alert saying "Passwords do not match!".
- **Success:** If all checks pass, it alerts a success message and then redirects the user back to the login page using `window.location.href = "index.html";`.
