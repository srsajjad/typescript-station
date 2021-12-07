import { getData } from "utils/getData";

describe("Click on any station from station list", async () => {
  it("station name should reflect on footer", () => {
    cy.visit("http://localhost:3001/");

    cy.wait(1000);

    cy.wrap({ getData })
      .invoke("getData")
      .then((data) => data)
      .then((data) => {
        const station = data[0];
        const stationName = station?.stationName;

        cy.get("[data-testid=list-item]").first().click();

        cy.get("[data-testid=card-footer-item-name]")
          .invoke("text")
          .should("eq", stationName);
      });
  });
});
