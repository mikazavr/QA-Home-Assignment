# Global feed

## Test Case: [TC03001] - [The global feed is displayed on the Home page by default if user is not logged in]

**Precondition:**

1. The user is not logged in.
2. The user is on the [Home page](https://conduit.realworld.how).

**Steps:**

1. Check the Global Feed on the Home page.

**Expected Result:**

1. The Global feed tab is active and the feed is displayed.
2. The Global feed contains articles.

## Test Case: [TC03002] - [The popular tags component is displayed next to the feen on the Home page]

**Precondition:**

1. The user is on the [Home page](https://conduit.realworld.how).

**Steps:**

1. Check the 'Popular tags' on the Home page.

**Expected Result:**

1. The Popolar tags compomponent is displayed next to the feed.

## Test Case: [TC03003] - [Feed contains 10 articles per page]

**Precondition:**

1. The user is on the [Home page](https://conduit.realworld.how).

**Steps:**

1. Check the articles in the Global feed.

**Expected Result:**

1. By default Global feed page contains 10 articles.

## Test Case: [TC03004] - [The global feed articles are sorted by date DESC ]

**Precondition:**

1. The user is on the [Home page](https://conduit.realworld.how).

**Steps:**

1. Check that articles' order in the Global feed is from newest to oldest.

**Expected Result:**

1. Articles in the Global Feed are sorted from newest to oldest.

## Test Case: [TC03005] - [User can request more articles in th feed if some are available to load]

**Precondition:**

1. The user is on the [Home page](https://conduit.realworld.how).

**Steps:**

1. Scroll down to the pagination component.
2. Click the button to navigate to the next page (2 if the user is on the 1st page)

**Expected Result:**

1. More articles is loaded.
2. User can see the next 10 articles in the Global feed.
3. The component with current page is active and visibly highlighted.

## Test Case: [TC03006] - [Feed is filtered after tag applying]

**Precondition:**

1. The user is on the [Home page](https://conduit.realworld.how).

**Steps:**

1. Click any tag from the 'Popular tag'.

**Expected Result:**

1. New tab with tag name is active next to the Global feed article.
2. Filered list of articles is displayed.

## Test Case: [TC03007] - [Global feed is available for logged in user]

**Precondition:**

1. The user is on the [Home page](https://conduit.realworld.how).
2. The user is logged in to the system.

**Steps:**

1. Click the 'Global Feed' tab.

**Expected Result:**

1. The Global feed tab is active and the feed is displayed.
2. The Global feed contains articles.

## Test Case: [TC03008] - [Loader is displayed during Global Feed loading]

**Precondition:**

1. The user is on the [Home page](https://conduit.realworld.how).
2. Articles is loading.

**Steps:**

1. Check the loader.

**Expected Result:**

1. The `Loading articles...` is shown during the loading process.

## Test Case: [TC03009] - [Empty state is shown in the Global Feed if no articles available]

**Precondition:**

1. The user is on the [Home page](https://conduit.realworld.how).
2. No articles available in Global Feed.

**Steps:**

1. Check the empty state.

**Expected Result:**

1. The `No articles` is shown during the loading process.

## Test Case: [TC03010] - [Error state is displayed when server returns 4xx, 5xx error for getting Global Feed]

**Precondition:**

1. The user is on the [Home page](https://conduit.realworld.how).
2. 4xx/5xx error occured during the loading data.

**Steps:**

1. Check the error state

**Expected Result:**

1. The `Something went wrong` is displayed.