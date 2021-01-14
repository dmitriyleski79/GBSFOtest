class SearchingResultsPage { 

    get searchingResults () {
        return $$('cite.iUh30')
    }

    findFullMatch (text) {
        return this.searchingResults.find(elem => elem.getText() == `www.${text}.com`).getText();
    }
}
    module.exports = new SearchingResultsPage()