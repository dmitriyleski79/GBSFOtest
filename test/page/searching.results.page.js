class SearchingResultsPage { 

    get searchingResults () {
        return $$('cite.iUh30')
    }

    findFullMatch (text) {
        return this.searchingResults.find(elem => elem.getText() == `www.${text}.com`).getText();
    }

    toolsButtonClick () {
        while(!$('#hdtb :nth-child(3) .mn-hd-txt').isDisplayed()) {
            $('#hdtb-tls').click()
        }    
    }
    
    get searchPeriodButton () {
        return $('#hdtb :nth-child(3) .mn-hd-txt')
    }

    inAnHourChoiceButton () {
        $('#lb g-menu-item:nth-child(2)').moveTo()
        $('#lb g-menu-item:nth-child(2)').click()
    }

    get dateOfResults () {
        return $$('span[class="f"]')
    }

    chekTimeOfResults () {
        
        const datesTexts = this.dateOfResults.map(elem => elem.getText())
        
        const datesNumbers = datesTexts.map(elem => Number(elem.replace(/[^0-9\.-]+/g,"")))
        
            return datesNumbers
        
    }

    
}
    module.exports = new SearchingResultsPage()