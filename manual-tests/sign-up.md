# Sign Up of a new user 

**Additional Notes:**
For performing validation tests create a user or verify it still exists in DB. 
| email | username | password |
| --- | --- | --- |
| john.doe@test.example | john.doe | 123QWErty |

**Test Data Notes:**
{{current date and time}} will be replaced with the actual date and time when the test is run.

## Test Case: [TC01001] - [A New user's account is created successfully]
Automation: UI ++ | API

**Precondition:**

1. The user does not have an account associated with the e-mail.	
2. The user is on the [register form](https://conduit.realworld.how/register).					

**Steps:**

1. Enter a unique `username` into the 'Username' field.					
2. Enter a unique `e-mail` into the 'Email' field.	
3. Enter a `password` to the 'Password' field.	
4. Click the 'Sign Up' button.					

**Expected Result:**

1. New user is successfully created.					
2. The user is logged in and redirected to the Home page, 'Your Feed' tab is opened by default.					


**Test Data:**
| email | username | password |
| --- | --- | --- |
| test{{current date and time}}@aa.a | Long username including some special characters: Lorem_ipsum!dolor@sit#amet,$consectetur%adipiscing^elit.&Etiam*sodales(orci)ut-consectetur+tempor.=Donec123accumsan\inibu` ante, auctor scelerisque erat porta rutrum. In hac habitasse platea dictumst+{{current date and time}} | kx49TRsKEoN4Vue@ |
| test+hehe{{current date and time}}@aa.a | किताब{{current date and time}} | 123456 |
| test+hehe{{current date and time}}@aa.a | testuser{{current date and time}} | 123QWErty |

## Test Case: [TC01002] - [An error message is displayed when a user attempts to register with an already existing username] 

**Precondition:**

1. The user with username (for example, 'john.doe') is created.
2. The user is on the [register form](https://conduit.realworld.how/register) .				

**Steps:**

1. Enter the existing `username` ('john.doe') into the 'Username' field.					
2. Enter a unique `e-mail` into the 'Email' field.	
3. Enter a `password` to the 'Password' field.	
4. Click the 'Sign Up' button.					

**Expected Result:**

1. An error message `username has already been taken` is displayed.
2. New user is not created.
3. The user remains on the register form. Fields in the form aren't cleared.				

**Test Data:**
| email | password |
| --- | --- |
| {{current date and time}}@test.example | 123QWErty |

## Test Case: [TC01003] - [An error message is displayed when a user attempts to register with an already taken email] 

**Precondition:**

1. At least one user exists in the system with specific email being tested.
2. The user is on the [register form](https://conduit.realworld.how/register).				

**Steps:**

1. Enter a unique `username` in to the 'Username' field.					
2. Enter the already taken `e-mail` (john.doe@test.example) into the 'Email' field.	
3. Enter a `password` to the 'Password' field.	
4. Click the 'Sign Up' button.					

**Expected Result:**

1. An error message `email has already been taken` is displayed.
2. New user is not created.
3. The user remains on the register form. Fields in the form aren't cleared.				


**Test Data:**
| username | password |
| --- | --- |
| manaual{{current date and time}} | 123QWErty |

## Test Case: [TC01004] - [An error message is displayed to the user if they leave the 'Username' field blank] 

**Precondition:**

1. The user is on the [register form](https://conduit.realworld.how/register).		

**Steps:**

1. Leave the 'Username' field blank.
2. Enter a unique `e-mail` in to the 'Email' field.
3. Enter valid `password`.
4. Click the 'Sign Up' button.

**Expected Result:**

1. An error message `username can't be blank` is displayed.
2. New user is not created.
3. The user remains on the register form. Fields in the form aren't cleared.


**Test Data:**
| email | password |
| --- | --- |
| {{current date and time}}@test.example | 123QWErty |

## Test Case: [TC01005] - [An error message is displayed to the user if they leave the 'Email' field blank] 

**Precondition:**

1. The user is on the [register form](https://conduit.realworld.how/register).	

**Steps:**

1. Enter the a unique `username` into the 'Username' field.
2. Leave the 'Email' field blank.
3. Enter the valid `password` in to the 'Password' field. 			

**Expected Result:**

1. An error message `email can't be blank` is displayed.
2. New user is not created.
3. The user is on the register form. Fields in the form aren't cleared.	

**Test Data:**
| username | password |
| --- | --- |
| manaual{{current date and time}} | 123QWErty |

## Test Case: [TC01006] - [An error message is displayed to the user if they leave the 'Password' field blank] 

**Precondition:**

1. The user is on the [register form](https://conduit.realworld.how/register).	

**Steps:**

1. Enter a unique `username` into the 'Username' field.
2. Enter a unique `e-mail`. in to the 'Email' field.
3. Leave the 'Password' field blank.
4. Click the 'Sign Up' button.

**Expected Result:**

1. An error message `password can't be blank` is displayed.
2. New user is not created.
3. The user is on the register form. Fields in the form aren't cleared.	

**Test Data:**

## Test Case: [TC01007] - [Clicking the "Sign Up" button on the website's header opens the registration form] 

**Precondition:**

1. The user is on the [Home page](https://conduit.realworld.how).
2. The user is niot logged in.	

**Steps:**

1. Click the 'Sign Up' button on the header.

**Expected Result:**

1. The user is redirected to the registration form.
2. All registration fields (Username, Email, Password) are displayed.

## Test Case: [TC01008] - [Clicking the "Need an account?" button on the Sign In form opens the registration form] 

**Precondition:**

1. The user is not logged in. 
2. The user is on the [login form](https://conduit.realworld.how/login).

**Steps:**

1. Click the "Need an account?" link.

**Expected Result:**

1. The user is redirected to the registration form.
2. All registration fields (Username, Email, Password) are displayed.

## Test Case: [TC01009] - [Clicking the "Sign Up" button in the comments section of an article opens the registration form] 

**Precondition:**

1. The user is not logged in. 
2. The user is on the [article preview page](https://conduit.realworld.how/article/Ill-compress-the-optical-SDD-hard-drive-that-should-interface-the-XSS-bandwidth!-553).

**Steps:**

1. Click the "Sign Up" button.

**Expected Result:**

1. The user is redirected to the registration form.
2. All registration fields (Username, Email, Password) are displayed.

## Test Case: [TC01010] - [Clicking the "Fav article" button opens the registration form if user is not logged in]  

**Precondition:**

1. The user is not logged in. 
2. The user is on the [Home page](https://conduit.realworld.how).

**Steps:**

1. Click the "Fav article" button on the any article in the feed.

**Expected Result:**

1. The user is redirected to the registration form.
2. All registration fields (Username, Email, Password) are displayed.




