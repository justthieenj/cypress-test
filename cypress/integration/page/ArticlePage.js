class Article {

    clickToolbarButton(button) {
        var xpathItem = `//div[@class=\'btn-toolbar\']//button[normalize-space()=\'${button}\']`;
        cy.xpath(xpathItem)
            .click();
    }

}

export default Article;