# Article

# Naviagtion to the article

## Test Case: [TC04001] - [Article page is opened by clicking article from the Global Feed]

**Precondition:**

1. The user is on the [Home page](https://conduit.realworld.how).

**Steps:**

1. Click on any article.

**Expected Result:**

1. The user is redirected to the article's page.
2. The article is visble (Title, Description, Body and Tags are displayed).

## Test Case: [TC04002] - [Article page is opened by clicking article from the Your Feed]

**Precondition:**

1. The user is logged in.
2. The user is following someone who have posted articles.
3. The user is on the [Home page](https://conduit.realworld.how). Your Feed is opened.

**Steps:**

1. Click on any article.

**Expected Result:**

1. The user is redirected to the article's page.
2. The article is visble (Title, Description, Body and Tags are displayed).

## Test Case: [TC04003] - [Article page is opened by clicking article from the filtered feed by tag]

**Precondition:**

1. The user is on the [Home page](https://conduit.realworld.how).
2. Articles filtered by any tag is opened.

**Steps:**

1. Click on any article.

**Expected Result:**

1. The user is redirected to the article's page.
2. The article is visble (Title, Description, Body and Tags are displayed).

## Test Case: [TC04004] - [Article page is opened by clicking article from the 'Favorited Articles' list]

**Precondition:**

1. The user is logged in.
2. The user added to the favorited articles at least 1 article.
3. The user is on the [Favorite Articles](https://conduit.realworld.how/profile/john.doee/favorites) list.

**Steps:**

1. Click on any article.

**Expected Result:**

1. The user is redirected to the article's page.
2. The article is visble (Title, Description, Body and Tags are displayed).

## Test Case: [TC04005] - [Article page is opened by clicking article from the 'My Articles' list]

**Precondition:**

1. The user is logged in.
2. The user posted at least 1 article.
3. The user is on the [Profile > My Articles](https://conduit.realworld.how/profile/john.doee) list.

**Steps:**

1. Click on any article.

**Expected Result:**

1. The user is redirected to the article's page.
2. The article is visble (Title, Description, Body and Tags are displayed).

## Test Case: [TC04006] - [Article page is opened by clicking article from the list of some author's articles]

## Test Case: [TC04007] - [Error state is displayed if the article unavailable]

**Precondition:**

1. Article posted by user (not by user used for test)
3. The user is on the [Profile > My Articles](https://conduit.realworld.how/profile/john.doee) list.

**Steps:**

1. Click on any article.

**Expected Result:**

1. The user is redirected to the article's page.
2. The article is visble (Title, Description, Body and Tags are displayed).

# Create an article

## Test Case: [TC04008] - ['New Article' button is hidden for an unauthorized users]

**Precondition:**

1. The user is not logged in.
2. The user is on the [Home page](https://conduit.realworld.how).

**Steps:**

1. Check header for 'New Article' button.

**Expected Result:**

1. The 'New Article' button is not visible.

## Test Case: [TC04009] - ['New Article' button is displayed for the logged in users]

**Precondition:**

1. The user is logged in.
2. The user is on the [Home page](https://conduit.realworld.how).

**Steps:**

1. Check header for 'New Article' button.

**Expected Result:**

1. The 'New Article button' is visible.

## Test Case: [TC04010] - [Article editor is opened by clicking 'New Article' button]

**Precondition:**

1. The user is logged in.
2. The user is on the [Home page](https://conduit.realworld.how).

**Steps:**

1. Click the 'New Article' button in the header.

**Expected Result:**

1. The user is redirected to the editor page.
2. All article creation fields (Title, Description, Body, Password) are displayed.

## Test Case: [TC04011] - [The user can successfully create an article]

**Precondition:**

1. The user is logged in.
2. The user is on the [Editor page](https://conduit.realworld.how/editor).

**Steps:**

1. Enter the `title` into the 'Article title' field.
2. Enter the `description` into the 'Articles Description' field
3. Enter the `article text` into the 'Body' field
4. *Enter the `tags` into the Tags field.
5. Click the 'Publish Article' button.

**Expected Result:**
1. The article is successfully created.
2. The user is redirected to the article's preview page

**Test Data:**

| Artile's title | Article's Description | Article's body | Tags |
| --- | --- | --- | --- |
| Fossil Find Your Way to Love: Dino Talk for Dates | Dinosaurs a turn-off? Not a chance! Dazzle your date with these prehistoric conversation starters: | **Did you know the T-Rex's arms were tiny?** (Fun fact + opens the door for dino discussion)|discussion, dino|

## Test Case: [TC04012] - [An error message is displayed to the user if they leave the 'Title' field blank]

**Precondition:**

1. The user is logged in.
2. The user is on the [Editor page](https://conduit.realworld.how/editor).

**Steps:**

1. Leave the field 'Title' blank.
2. Enter the `description` in to the 'Description' field.
3. Enter the `article text` into the 'Body' field.
4. Click the 'Publish Article' button.

**Expected Result:**
1. An error message `title can't be blank` is displayed.
2. The article is not created.
3. The user remains on the article editor page. Fields are not cleared.

**Test Data:**

| Artile's title | Article's Description | Article's body | Tags |
| --- | --- | --- | --- |
| Fossil Find Your Way to Love: Dino Talk for Dates | Dinosaurs a turn-off? Not a chance! Dazzle your date with these prehistoric conversation starters: | **Did you know the T-Rex's arms were tiny?** (Fun fact + opens the door for dino discussion)|discussion, dino|


## Test Case: [TC04013] - [The error message is displayed to the user if the entered article title is alredy taken]

**Precondition:**

1. The user is logged in.
2. The article with `title` 'for example, ' is created.
2. The user is on the [Editor page](https://conduit.realworld.how/editor).

**Steps:**

1. Enter the existing `title` ('john.doe') into the 'Title' field.
2. Enter the `description` in to the 'Description' field.
3. Enter the `article text` into the 'Body' field.
4. Click the 'Publish Article' button.

**Expected Result:**
1. An error message `title must be unique` is displayed.
2. The article is not created.
3. The user remains on the article editor page. Fields are not cleared.

**Test Data:**

| Artile's title | Article's Description | Article's body | Tags |
| --- | --- | --- | --- |
| Fossil Find Your Way to Love: Dino Talk for Dates | Dinosaurs a turn-off? Not a chance! Dazzle your date with these prehistoric conversation starters: | **Did you know the T-Rex's arms were tiny?** (Fun fact + opens the door for dino discussion)|discussion, dino|


## Test Case: [TC04014] - [An error message is displayed to the user if they leave the 'Description' field blank]

**Precondition:**

1. The user is logged in.
2. The user is on the [Editor page](https://conduit.realworld.how/editor).

**Steps:**

1. Enter the `title` into the 'Article title' field.
2. Leave the 'Description' field blank.
3. Enter the `article text` into the 'Body' field.
4. Click the 'Publish Article' button.

**Expected Result:**
1. An error message `description can't be blank` is displayed.
2. The article is not created.
3. The user remains on the article editor page. Fields are not cleared.

**Test Data:**

| Artile's title | Article's Description | Article's body | Tags |
| --- | --- | --- | --- |
| Fossil Find Your Way to Love: Dino Talk for Dates | Dinosaurs a turn-off? Not a chance! Dazzle your date with these prehistoric conversation starters: | **Did you know the T-Rex's arms were tiny?** (Fun fact + opens the door for dino discussion)|discussion, dino|


## Test Case: [TC04015] - [An error message is displayed to the user if they leave the 'Body' field blank]

**Precondition:**

1. The user is logged in.
2. The user is on the [Editor page](https://conduit.realworld.how/editor).

**Steps:**

1. Enter the `title` into the 'Article title' field.
2. Enter the `description` in to the 'Description' field.
3. Leave the 'Body' field blank.
4. Click the 'Publish Article' button.

**Expected Result:**
1. An error message `body can't be blank` is displayed.
2. The article is not created.
3. The user remains on the article editor page. Fields are not cleared.

**Test Data:**

| Artile's title | Article's Description | Article's body | Tags |
| --- | --- | --- | --- |
| Fossil Find Your Way to Love: Dino Talk for Dates | Dinosaurs a turn-off? Not a chance! Dazzle your date with these prehistoric conversation starters: | **Did you know the T-Rex's arms were tiny?** (Fun fact + opens the door for dino discussion)|discussion, dino|


## Test Case: [TC04016] - [The tag is added to the Tags]

**Precondition:**

1. The user is logged in.
2. The user is on the [Editor page](https://conduit.realworld.how/editor).

**Steps:**

1. Enter the `tag` into the Tags field.
2. Click the {Enter} button to apply.

**Expected Result:**
1. The tag is saved and displayed as a chips component.


## Test Case: [TC04017] - [The tag is removed from the Tags]

**Precondition:**

1. The user is logged in.
2. The user is on the [Editor page](https://conduit.realworld.how/editor).
3. At least 1 `tag` is added to the 'Tags' field.

**Steps:**

1. Click the x to remove tag from the list of tags.

**Expected Result:**
1. The tag is removed.

## Test Case: [TC04018] - [Markdown text in the article body is displayed correctly after saving the article]

**Precondition:**

1. The user is logged in.
2. The user is on the [Editor page](https://conduit.realworld.how/editor).

**Steps:**

1. Enter the `title` into the 'Article title' field.
2. Enter the `description` into the 'Articles Description' field
3. Enter the `article text` into the 'Body' field
4. *Enter the `tags` into the Tags field.
5. Click the 'Publish Article' button.

**Expected Result:**
1. The article is successfully created.
2. The user is redirected to the article's preview page.
3. Markdown text is displayed correctly.

## Test Case: [TC04019] - [Duplicated tags are merged into the 1 after saving the article]

**Precondition:**

1. The user is logged in.
2. The user is on the [Editor page](https://conduit.realworld.how/editor).

**Steps:**

1. Enter the `tag` into the Tags field.
2. Click the {Enter} button to apply.
3. Enter the same `tag` into the Tags field.
4. Enter Enter the `title` into the 'Article title' field.
5. Enter the `description` into the 'Articles Description' field
6. Enter the `article text` into the 'Body' field.
7. Click the 'Publish Article' button.

**Expected Result:**
1. Duplicated tag is displayed only once.