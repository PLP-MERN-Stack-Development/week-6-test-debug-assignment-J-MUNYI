import request from 'supertest';
import app from '../../server'; // Your Express app

describe('Bugs API', () => {
  it('should create a new bug', async () => {
    const response = await request(app)
      .post('/api/bugs')
      .send({ title: 'Login error', description: 'Fails on Chrome' });
    expect(response.statusCode).toBe(201);
    expect(response.body.title).toBe('Login error');
  });

  it('should get all bugs', async () => {
    const response = await request(app).get('/api/bugs');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
