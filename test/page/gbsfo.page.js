class GbsfoPage {
    
    waitForLogo () {
        this.waitForDisplay (this.mainLog)
    }

    get mainLog () {
        return $('#Layer_1')
    }

    waitForDisplay (element) {
        browser.waitUntil(() => {
            return element.isDisplayed()
        }, 5000, 'title does not match');

    }
}
module.exports = new GbsfoPage()