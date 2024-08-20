class Basket {
    couponField = "input#coupon_code";
    applyCouponButton = "button[name='apply_coupon']";
    removeCouponCodeButton = ".woocommerce-remove-coupon";
    itemsInBasket = ".product-name > a";
  
    applyCoupon(couponCode) {
        cy.get(this.couponField).clear().type(couponCode);
        cy.get(this.applyCouponButton).click();
    }

    verifyBasketTableContainsSearchTerm(itemName) {
        cy.get(this.itemsInBasket).contains(itemName).should("exist");
    }
  };
  
  export default new Basket();
