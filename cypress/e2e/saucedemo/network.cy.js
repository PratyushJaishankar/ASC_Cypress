describe('Notes API Tests with Fixtures', () => {
  const baseUrl = 'https://practice.expandtesting.com/notes/api';
  let authToken = '';
  let noteId = '';
  let testUser = {};
  let testNote = {};

  // Load fixtures before all tests
  before(() => {
    cy.fixture('users').then((users) => {
      // Pick the first user from the fixture for testing
      testUser = {
        name: users[0].name,
        email: `cypress${Date.now()}@test.com`, // unique email
        password: 'Cypress123!'
      };

      // Prepare a note
      testNote = {
        title: 'Cypress Test Note',
        description: 'This note is created by Cypress API Test',
        category: 'Work'
      };
    });
  });

  // User Registration
  it('Should register a new user', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/users/register`,
      form: true,
      body: {
        name: testUser.name,
        email: testUser.email,
        password: testUser.password
      }
    }).then((res) => {
      expect(res.status).to.eq(201);
      expect(res.body.success).to.be.true;
      expect(res.body.data).to.have.property('email', testUser.email);
    });
  });

  // User Login
  it('Should login with registered user', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/users/login`,
      form: true,
      body: {
        email: testUser.email,
        password: testUser.password
      }
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.success).to.be.true;
      authToken = res.body.data.token;
      expect(authToken).to.not.be.empty;
    });
  });

  // Create Note
  it('Should create a new note', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/notes`,
      form: true,
      headers: { 'x-auth-token': authToken },
      body: testNote
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.success).to.be.true;
      expect(res.body.data.title).to.eq(testNote.title);
      noteId = res.body.data.id;
    });
  });

  // Get All Notes
  it('Should fetch all notes', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/notes`,
      headers: { 'x-auth-token': authToken }
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.success).to.be.true;
      expect(res.body.data.length).to.be.greaterThan(0);
    });
  });

  // Update Note
  it('Should update the note', () => {
    cy.request({
      method: 'PUT',
      url: `${baseUrl}/notes/${noteId}`,
      form: true,
      headers: { 'x-auth-token': authToken },
      body: {
        title: 'Updated Title',
        description: 'Updated Description',
        category: 'Work',
        completed: true
      }
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.data.title).to.eq('Updated Title');
      expect(res.body.data.completed).to.be.true;
    });
  });

  // Delete Note
  it('Should delete the note', () => {
    cy.request({
      method: 'DELETE',
      url: `${baseUrl}/notes/${noteId}`,
      headers: { 'x-auth-token': authToken }
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.success).to.be.true;
    });
  });

  // User Logout
  it('Should logout the user', () => {
    cy.request({
      method: 'DELETE',
      url: `${baseUrl}/users/logout`,
      headers: { 'x-auth-token': authToken }
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.success).to.be.true;
    });
  });
});
