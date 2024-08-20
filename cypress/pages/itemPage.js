class Item {
    addToBasketButton = "button[name='add-to-cart']";
  
    addItemToBasket() {
        cy.get(this.addToBasketButton).click();
    }    
  };
  
  export default new Item();
