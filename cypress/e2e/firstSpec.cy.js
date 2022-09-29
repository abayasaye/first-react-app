describe("empty spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
  });
});

describe("tests for grade component",()=>{
  it("check text", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-testid="grade-id"]')
    .contains("delores");
  });
})

describe("tests for home component",()=>{
  it("check input in home-component",()=>{
    cy.visit("http://localhost:3000/");
    cy.get()
    .contains()
  })
})
