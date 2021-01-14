class MainPage {

    get inputField () {
        return $('input.gLFyf');
    }

    search (value) {
        this.inputField.setValue(value);
        browser.keys("\uE007");
    }
    
}

module.exports = new MainPage()