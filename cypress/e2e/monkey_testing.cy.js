describe('Los estudiantes under monkeys', function() {
    it('visits los estudiantes and survives monkeys', function() {
        cy.visit('https://losestudiantes.co');
        cy.wait(1000);
        randomEvent(10);
    });
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomEvent(monkeysLeft) {
    var events = [
        clickRandomLink,
        fillRandomTextField,
        selectRandomCombo,
        clickRandomButton
    ];

    if(monkeysLeft > 0) {
        var chosenEvent = events[getRandomInt(0, events.length)];
        chosenEvent().then((success) => {
            if(success) {
                cy.wait(1000);
                randomEvent(monkeysLeft - 1);
            } else {
                randomEvent(monkeysLeft - 1);
            }
        });
    }
}

function clickRandomLink() {
    return cy.get('a').then($links => {
        var randomLink = $links.get(getRandomInt(0, $links.length));
        if(!Cypress.dom.isHidden(randomLink)) {
            cy.wrap(randomLink).click({force: true});
            return cy.wrap(true);
        }
        return cy.wrap(false);
    });
}

function fillRandomTextField() {
    return cy.get('body').then($body => {
        if ($body.find('input[type="text"]').length > 0) {
            return cy.get('input[type="text"]').then($inputs => {
                var randomInput = $inputs.get(getRandomInt(0, $inputs.length));
                if (!Cypress.dom.isHidden(randomInput) && !randomInput.disabled && !randomInput.readOnly) {
                    cy.wrap(randomInput).type('Random Text', { force: true });
                    return cy.wrap(true);
                } 
                return cy.wrap(false);
            });
        } else {
            return cy.wrap(false);
        }
    });
}

function selectRandomCombo() {
    return cy.get('body').then($body => {
        if ($body.find('select').length > 0) {
            return cy.get('select').then($combos => {
                var randomCombo = $combos.get(getRandomInt(0, $combos.length));
                if(!Cypress.dom.isHidden(randomCombo)) {
                    var options = randomCombo.children;
                    var optionsLength = options.length;
                    if (optionsLength > 0) {
                        var randomOptionIndex = getRandomInt(0, optionsLength);
                        var optionValue = options.item(randomOptionIndex).value;
                        cy.wrap(randomCombo).select(optionValue);
                        return cy.wrap(true);
                    }
                }
                return cy.wrap(false);
            });
        } else {
            return cy.wrap(false);
        }
    });
}

function clickRandomButton() {
    return cy.get('button').then($buttons => {
        var randomButton = $buttons.get(getRandomInt(0, $buttons.length));
        if(!Cypress.dom.isHidden(randomButton)) {
            cy.wrap(randomButton).click({force: true});
            return cy.wrap(true);
        }
        return cy.wrap(false);
    });
}
