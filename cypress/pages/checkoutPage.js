class Checkout {
    enterDetails(firstName, lastName, streetAddress, townCity, postCode, phoneNumber) {
        cy.get("#billing_first_name").clear().type(firstName);
        cy.get("#billing_last_name").clear().type(lastName);
        cy.get("#billing_address_1").clear().type(streetAddress);
        cy.get("#billing_city").clear().type(townCity);
        cy.get("#billing_postcode").clear().type(postCode);
        cy.get("#billing_phone").clear().type(phoneNumber);
        cy.get("#billing_email").clear().type(emailAddress);
    }

    placeOrder() {
        cy.get("#place_order").click();
    }
};

export default Checkout;
