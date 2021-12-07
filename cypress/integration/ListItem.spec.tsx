import { getData } from "utils/getData";

describe("Click on any station from station list", async () => {
  it("list item should expand", () => {
    cy.visit("http://localhost:3001/");

    cy.wait(1000);

    cy.wrap({ getData })
      .invoke("getData")
      .then((data) => data)
      .then((data) => {
        cy.get("[data-testid=list-item-expanded]")
          .invoke("height")
          .should("eq", 0);

        cy.get("[data-testid=list-item]").first().click();

        cy.get("[data-testid=list-item-expanded]")
          .invoke("height")
          .should("be.gt", 0);
      });
  });
});
