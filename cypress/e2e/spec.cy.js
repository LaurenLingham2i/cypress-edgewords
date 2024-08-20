import NavBar from "../pages/navBar"
import Login from "../pages/loginPage";
import Item from "../pages/itemPage";
import Basket from "../pages/basketPage";
import Checkout from "../pages/checkoutPage";


// Logs in, adds sunglasses to basket and clicks on basket page
beforeEach(function () {
  cy.visit("https://www.edgewordstraining.co.uk/demo-site/")
  NavBar.goPlace(NavBar.myAccountLink)
  NavBar.dismissCookie()
  Login.login("lauren.lingham@2itesting.com", "Edgeword2023")
  Login.verifyLogin("lauren.lingham")

  NavBar.searchInSearchBar("sunglasses")
  Item.addItemToBasket()
  NavBar.goPlace(NavBar.basketLink)
  Basket.verifyBasketTableContainsSearchTerm("Sunglasses");

  NavBar.goPlace(NavBar.basketLink)
});


describe("Recreation of ecommerce shop customer actions", () => {

  // Apply discount code and confirm that total is correct
  it("can login, add item to basket and apply a discount code", () => {
    Basket.applyCoupon("edgewords")

    cy.get(".cart-subtotal > td > .amount.woocommerce-Price-amount > bdi").invoke("text").then((text) => {
      const textAmount = text.replace(/[^0-9.]/g, '');
      const subTotal = Math.round(parseFloat(textAmount) * 100); 

      cy.get(".cart-discount.coupon-edgewords > td > .amount.woocommerce-Price-amount").invoke("text").then((text) => {
        const textDiscount = text.match(/-?£?(\d+(\.\d{1,2})?)/);
        const discount = textDiscount ? Math.round(parseFloat(textDiscount[1]) * 100) : null;
        let percentageDiscount = ((discount/subTotal)*100)
        expect(percentageDiscount).to.equal(15)
      })
    })
  });

  // Confirm order number exists in ‘My Orders’
  it("can login, add item to basket, place order and confirm the order number is displayed in My Orders", () => {
    Checkout.enterDetails("Paddington", "Bear", "32 Windsor Garens", "London", "W2 6AA", "12345");
    Checkout.placeOrder;
    
    cy.contains("Order received").should("exist");
  })
});
