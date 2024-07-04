# Sign In

**Test Data:**
Use this registered user or create a new one for the test if needed. 
| email | username | password |
| --- | --- | --- |
| john.doe@test.example | john.doee | 123QWErty |

## Test Case: [TC02001] - [A user with an existing account can successfully log in to the system]

**Precondition:**

1. The user has registered account.
2. The user is not logged in.
3. The user is on the [login form](https://conduit.realworld.how/login)

**Steps:**

1. Enter an `email` associated with an existing user to the 'Email' field.
2. Enter the `password` into the 'Password' field.
3. Click the 'Sign In' button.	

**Expected Result:**

1. The user is successfully authorized.
2. The user is redirected to the Home page, 'Your Feed' tab is opened by default.
3. Buttons 'Sign in' and 'Sign Up' in the header isn't visible.


## Test Case: [TC02002] - [An error message is displayed when a user attempts to to log in with an email that does not match records]

**Precondition:**

1. The user is not logged in.
2. The user is on the [login form](https://conduit.realworld.how/login).

**Steps:**

1. Enter the `email` that doesn't match the records of existing users.
2. Enter the `password` into the 'Password' field.
3. Click the 'Sign In' button.

**Expected Result:**

1. An error message `email or password is invalid` is displayed.
2. The user remains on the login page. The fields in the form are not clreared.		


## Test Case: [TC02003] - [An error message is displayed when a user attempts to to log in with a password that does not match records]

**Precondition:**

1. The user is not logged in.
2. The user is on the [login form](https://conduit.realworld.how/login).

**Steps:**

1. Enter an `email` associated with an existing user to the 'Email' field.
2. Enter the `password` that doesn't match into the 'Password' field.
3. Click the 'Sign In' button		

**Expected Result:**

1. An error message `email or password is invalid` is displayed.
2. The user remains on the login page. The fields in the form are not clreared.			


## Test Case: [TC02004] - [An error message is displayed to the user if they leave the 'Email' field blank]

**Precondition:**

1. The user is not logged in.
2. The user is on the [login form](https://conduit.realworld.how/login).	

**Steps:**

1. Leave the 'Email' field blank.
2. Enter the valid `password` in to the 'Password' field.
3. Click the 'Sign In' button.	

**Expected Result:**

1. An error message `email can't be blank` is displayed.		
2. The user remains on the login page. The fields in the form are not clreared.

## Test Case: [TC02005] - [An error message is displayed to the user if they leave the 'Password' field blank]

**Precondition:**

1. The user is not logged in.
2. The user is on the [login form](https://conduit.realworld.how/login).	

**Steps:**

1. Enter the valid `email` in to the 'Password' field.
2. Leave the 'Password' field blank.
3. Click the 'Sign In' button.	

**Expected Result:**

1. An error message `password can't be blank` is displayed.		
2. The user remains on the login page. The fields in the form are not clreared.

## Test Case: [TC02006] - [Clicking the "Sign In" button on the website's header opens the login page]

***Precondition:**

1. The user is on the [Home page](https://conduit.realworld.how).
2. The user is not logged in.	

**Steps:**

1. Click the 'Sign In' button on the header.

**Expected Result:**

1. The user is redirected to the login form.
2. All login form fields (Email, Password) are displayed.

## Test Case: [TC02007] - [Clicking the "Have an account?" button on the Sign Up form opens the login page]

**Precondition:**

1. The user is not logged in.
2. The user is on the [register form](https://conduit.realworld.how/register).				

**Steps:**

1. Click the "Have an account?" link.

**Expected Result:**

1. The user is redirected to the login form.
2. All login form fields (Email, Password) are displayed. 				