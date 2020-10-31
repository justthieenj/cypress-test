class IndexPage {
    selectRightMenu(navHeader, item) {
        var xpathItem = `//div[h2[text()=\'${navHeader}\']]//span[text()=\'${item}\']`;
        console.log(xpathItem);
        cy.xpath(xpathItem)
            .click();
    }

    clickButtonToolBar(button) {
        var xpathButton = `//div[@class=\'btn-toolbar\']//button[contains(.,\'${button}\')]`;
        cy.xpath(xpathButton)
                    .click();
    }
}

export default IndexPage;