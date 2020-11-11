describe('Auth Test', () => {
  beforeEach(() => {
    cy.viewport(1240, 900);
  });
  it('can visit the index page and go to sign in page', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Sign In').click();
  });
  it('can sign in by the user and have token in local Storage', () => {
    cy.get('[placeholder="email"]').type('cypress@test.com');
    cy.get('[placeholder="password"]').type('cypress123');
    cy.get('.button-auth.submit-auth')
      .click()
      .should(() => {
        expect(localStorage.getItem('token')).to.exist;
      });
  });
  it('can visit the Dashboard page', () => {
    cy.contains('Dashboard').click();
  });
  it('can get signed user name', () => {
    cy.get('.page-top-description')
      .find('p')
      .first()
      .find('span')
      .should('have.class', 'user')
      .should('have.text', 'CYPRESS');
  });
  it('can sign out', () => {
    cy.contains('Sign Out').click();
  });
  it('can not get user name', () => {
    cy.contains('Dashboard').click();
    cy.get('.page-top-description')
      .should('have.not.text', 'CYPRESS')
      .should(
        'have.text',
        '회원님의 구독 서비스 통계를 한번에 볼 수 있습니다.'
      );
  });
});

// 이 테스트는 SAMPLE USER 정보가 있을 시에만 통과합니다.
describe('SAMPLE USER Test', () => {
  beforeEach(() => {
    cy.viewport(1240, 900);
  });
  it('can visit the index page and go to sign in page', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Sign In').click();
  });
  it('can sign in by SAMPLE USER button', () => {
    cy.get('.submit-auth-sample').click();
  });
  it('can visit the Dashboard page', () => {
    cy.contains('Dashboard').click();
  });
  it('can get signed user name', () => {
    cy.get('.page-top-description')
      .find('p')
      .first()
      .find('span')
      .should('have.class', 'user')
      .should('have.text', 'SAMPLE');
  });
  it('can sign out', () => {
    cy.contains('Sign Out').click();
  });
  it('can not get user name', () => {
    cy.contains('Dashboard').click();
    cy.get('.page-top-description')
      .should('have.not.text', 'SAMPLE')
      .should(
        'have.text',
        '회원님의 구독 서비스 통계를 한번에 볼 수 있습니다.'
      );
  });
});
