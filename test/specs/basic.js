const assert = require('assert').strict;
const searchingResultsPage = require('../page/searching.results.page.js');
const mainPage  = require('../page/main.page.js');
const gbsfoPage = require('../page/gbsfo.page.js');

describe('home task', () => {
    it('task1', () => {

        browser.url('https://www.google.com/');

        mainPage.search('gbsfo');

        browser.newWindow(`https://${searchingResultsPage.findFullMatch('gbsfo')}`);
        
        browser.waitUntil(() => {
            return gbsfoPage.mainLog.isDisplayed()
        }, 5000, 'title does not match');
    
        expect(browser).toHaveTitle('GBSFO');
        
        browser.switchWindow('Google')
        
    })

    it('task2', () => {
        browser.url('https://www.google.com/');

        mainPage.search('test');

        searchingResultsPage.toolsButtonClick();
        searchingResultsPage.searchPeriodButton.click();
        searchingResultsPage.inAnHourChoiceButton();
        searchingResultsPage.chekTimeOfResults();
        browser.pause(1000);

    })
})