class NavBar {
    homeLink = ".current-menu-item.current_page_item.menu-item.menu-item-42.menu-item-home.menu-item-object-custom.menu-item-type-custom > a";
    shopLink = ".menu-item.menu-item-43.menu-item-object-page.menu-item-type-post_type > a";
    cartLink = ".menu-item.menu-item-44.menu-item-object-page.menu-item-type-post_type > a";
    checkoutLink = ".menu-item.menu-item-45.menu-item-object-page.menu-item-type-post_type > a";
    myAccountLink = ".menu-item.menu-item-46.menu-item-object-page.menu-item-type-post_type > a";
    blogLink = ".menu-item.menu-item-47.menu-item-object-page.menu-item-type-post_type > a";
    searchBar = "header#masthead form[role='search'] > input[name='s']";
    basketLink = "a[title='View your shopping cart']";
    dismissCookiesButton = ".demo_store.woocommerce-store-notice > .woocommerce-store-notice__dismiss-link";
  
    goPlace(location) {
        cy.get(location).click();
    }

    searchInSearchBar(searchTerm) {
        cy.get(this.searchBar).type(searchTerm + "{enter}");
    }

    dismissCookie() {
        cy.get(this.dismissCookiesButton).click();
    }
  };
  
  export default new NavBar();
  