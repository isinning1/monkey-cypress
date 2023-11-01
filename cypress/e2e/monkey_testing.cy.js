describe('Los estudiantes under monkeys', function() {
    it('visits los estudiantes and survives monkeys', function() {
        cy.visit('https://losestudiantes.co');
        cy.wait(1000);
        randomEvent(10);
    })
})

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
        var randomEvent = events[getRandomInt(0, events.length)];
        randomEvent();
        cy.wait(1000);
        randomEvent(monkeysLeft - 1);
    }
}

function clickRandomLink() {
    cy.get('a').then($links => {
        var randomLink = $links.get(getRandomInt(0, $links.length));
        if(!Cypress.dom.isHidden(randomLink)) {
            cy.wrap(randomLink).click({force: true});
        }
    });
}

function fillRandomTextField() {
    cy.get('input[type="text"]', { timeout: 10000 }).then($inputs => {
        var randomInput = $inputs.get(getRandomInt(0, $inputs.length));
        if(!Cypress.dom.isHidden(randomInput)) {
            cy.wrap(randomInput).type('Random Text');
        }
    });
}

function selectRandomCombo() {
    cy.get('select', { timeout: 10000 }).then($combos => {
        var randomCombo = $combos.get(getRandomInt(0, $combos.length));
        if(!Cypress.dom.isHidden(randomCombo)) {
            var optionsLength = randomCombo.children.length;
            var randomOptionIndex = getRandomInt(0, optionsLength);
            cy.wrap(randomCombo).select(randomCombo.children[randomOptionIndex].value);
        }
    });
}

function clickRandomButton() {
    cy.get('button').then($buttons => {
        var randomButton = $buttons.get(getRandomInt(0, $buttons.length));
        if(!Cypress.dom.isHidden(randomButton)) {
            cy.wrap(randomButton).click({force: true});
        }
    });
}