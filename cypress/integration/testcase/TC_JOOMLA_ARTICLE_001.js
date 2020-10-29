import StringHelper from '../utils/StringHelper';

import Browser from '../utils/Browser';
import LoginPage from '../page/LoginPage';
import IndexPage from '../page/IndexPage';
import ArticlePage from '../page/ArticlePage';
import NewArticlePage from '../page/NewArticlePage';

describe('User can create new article with valid information', () => {
    const stringHelper = new StringHelper();

    const browser = new Browser();
    const loginPage = new LoginPage();
    const indexPage = new IndexPage();
    const articlePage = new ArticlePage();
    const newArticlePage = new NewArticlePage();

    it('User can create new article with valid information', () => {
        // #1. Navigate to the URL: http://localhost/joomla/administrator/
        browser.navigateURL('http://localhost/joomla/administrator/')

        // #2. Enter valid username into Username field
        // #3. Click on 'Log in' button
        loginPage.login('admin', 'admin')

        // #4. Select Content > Articles
        indexPage.selectRightMenu('Content', 'Articles')

        // #5. Click on 'New' icon of the top right toolbar
        articlePage.clickToolbarButton('New')

        // #6. Enter a title on 'Title' field
        newArticlePage.inputHeader('Title', stringHelper.randomString(10))

        // #7. Select an item from the 'Category' dropdown list
        newArticlePage.inputFormVertical('Category','- Joomla!')

        // #8. Enter value on 'Article Text' text area
        newArticlePage.inputContent(stringHelper.randomString(50))

        // #9. Click on 'Save & Close' icon of the top right toolbar
        newArticlePage.clickToolbarButton('Save & Close')

        // #10. Verify the article is saved successfully

    })
})