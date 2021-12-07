import { getData } from "utils/getData";

describe("Feed dummy data should reflect on UI", async () => {
  it("renders the station list", () => {
    cy.visit("http://localhost:3001/");

    cy.wait(1000);

    cy.wrap({ getData })
      .invoke("getData")
      .then((data) => data)
      .then((data) => {
        cy.get("[data-testid=card-body]")
          .children()
          .its("length")
          .should("eq", data.length);
      });
  });
});
