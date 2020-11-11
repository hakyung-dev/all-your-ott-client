describe('Add Review Test', () => {
  const today = new Date();
  const nowTimeText = today.toString().slice(16, 24);
  const todayDate = today.getDate();

  beforeEach(() => {
    cy.viewport(1240, 900);
  });
  it('can sign in by sypress user', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Sign In').click();
    cy.get('[placeholder="email"]').type('cypress@test.com');
    cy.get('[placeholder="password"]').type('cypress123');
    cy.get('.button-auth.submit-auth')
      .click()
      .should(() => {
        expect(localStorage.getItem('token')).to.exist;
      });
  });
  it('can add user subscription', () => {
    cy.contains('Dashboard').click();
    cy.contains('설정').click();
    cy.get('.input-add-name').type(nowTimeText);
    cy.get('.input-add').first().type('14900');
    cy.get('.input-add').last().type('22');
    cy.get('.submit-small').click();
  });
  it('can visit the Review page', () => {
    cy.contains('Review').click();
  });
  it('can add today Review', () => {
    cy.contains(todayDate).next().find('.link-add').click();
    cy.get('.input-search').type('intern');
    cy.get('.submit-search').click();
    cy.get('.choice').first().click();
    cy.get('select').select(nowTimeText);
    cy.get('.money-blank').last().click();
    cy.get('.input-create').type('CYPRESS TEST!!!!');
    cy.contains('등록하기').click();
  });
  it('can get the review', () => {
    cy.get('.number-monthly.today')
      .last()
      .next()
      .children('.original-title')
      .should('have.text', 'The Intern')
      .click();
  });
  it('can get my review', () => {
    cy.get('h1.title').should('have.text', '인턴, 2015');
    cy.get('.my-review>p').eq(2).should('have.text', '감상평CYPRESS TEST!!!!');
  });
  it('can remove the review', () => {
    cy.contains('Review').click();
    cy.get('.del-label').click();
    cy.get('.number-monthly.today').last().next().parent().next().click();
  });
  it('can remove the subscription', () => {
    cy.contains('Dashboard').click();
    cy.contains('설정').click();
    cy.contains(nowTimeText).parent().prev().click();
  });
});
