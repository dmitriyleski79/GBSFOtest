const searchingResultsPage = require('../page/searching.results.page.js');
const mainPage  = require('../page/main.page.js');
const gbsfoPage = require('../page/gbsfo.page.js');
const chai = require('chai');
const axios = require('axios');
const { expect } = require('chai');

describe('home task', () => {

    beforeEach (() => browser.url('/'))

    it('task1', () => {

        mainPage.search('gbsfo');

        browser.newWindow(`https://${searchingResultsPage.findFullMatch('gbsfo')}`);
        
        gbsfoPage.waitForLogo()
    
        expect(browser).toHaveTitle('GBSFO');
        
        browser.switchWindow('Google')
        
    })

    it('task2', () => {

        mainPage.search('test');

        searchingResultsPage.toolsButtonClick();
        searchingResultsPage.searchPeriodButton.click();
        searchingResultsPage.inAnHourChoiceButton();
        const listOfTimeResults = searchingResultsPage.chekTimeOfResults();
        chai.expect(listOfTimeResults.every((time) => time <= 60)).equal(true);

    })

    xit('task3', async () => {

        async function sendPostAuth (url, expectedStatus, login, password) {
            const {status} = await axios({
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                data: {
                    login: login,
                    password: password
                },
                url: `${url}/api/auth/login`
            })
            chai.expect(status).equal(expectedStatus);
        }

        


    })
})