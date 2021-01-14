const assert = require('assert').strict;
const searchingResultsPage = require('../page/searching.results.page.js');
const mainPage  = require('../page/main.page.js');
const gbsfoPage = require('../page/gbsfo.page.js');

describe('home task', () => {
    it('task1', () => {

        browser.url('https://www.google.com/')
        mainPage.search('gbsfo')

        browser.newWindow(`https://${searchingResultsPage.findFullMatch('gbsfo')}`)
        
        browser.waitUntil(() => {
            return browser.getTitle() == 'GBSFO'
        }, 5000, 'title does not match')

        assert.strictEqual(gbsfoPage.mainLog.isDisplayed(), true)
    
        expect(browser).toHaveTitle('GBSFO');
        
        browser.closeWindow()
        
        browser.pause(3000)
    })

    xit('task2', () => {
        browser.url('google.com')
    })
})