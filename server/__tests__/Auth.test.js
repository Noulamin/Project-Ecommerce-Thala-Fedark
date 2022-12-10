const app = require('../server')
const request = require('supertest')


describe('POST /api/auth/login', () => {

    test('should respond status 400 if email or password empty', async () => {
        const res = await request(app).post('/api/auth/login').send({
            email: '',
            password: ''
        })

        expect(res.statusCode).toBe(400)
    });

    test('should respond status 400 if email not valid', async () => {
        const res = await request(app).post('/api/auth/login').send({
            email: 'hagaf97050@diratu.com',
            password: 'pass'
        })

        expect(res.statusCode).toBe(400)
    });

    test('should respond status 400 if email or password incorect', async () => {
        const res = await request(app).post('/api/auth/login').send({
            email: 'gmail@gmail.com',
            password: 'password'
        })

        expect(res.statusCode).toBe(400)
    })

    test('should respond status code 200 if user successfuly logined', async () => {
        const res = await request(app).post('/api/auth/login').send({
            email: 'kixikiw475@eilnews.com',
            password: 'password'
        })

        expect(res.statusCode).toBe(200)

    })

});

describe('POST /api/auth/register', () => {
    
    test('should respond status 400 if email alredy taken', async () => {
        const res = await request(app).post('/api/auth/register').send({
            first_Name : 'Boubker', 
            last_Name : 'Nour', 
            email : 'kixikiw475@eilnews.com', 
            password : 'pass',
            phone_number : '089994949494',
            city : 'youssouf',
            adresse : 'casablanca'
        })

        expect(res.statusCode).toBe(400)
    });

    test('should respond status 400 if value empty', async () => {
        const res = await request(app).post('/api/auth/register').send({
            first_Name : '', 
            last_Name : '', 
            email : '', 
            password : '',
            phone_number : '',
            city : '',
            adresse : ''
        })

        expect(res.statusCode).toBe(400)
    });

    test('should respond status 201 if user create successufly', async () => {
        const res = await request(app).post('/api/auth/register').send({
            first_Name : 'Boubker', 
            last_Name : 'Nour', 
            email : 'boubkerennaqar5@gmail.com', 
            password : 'pass',
            phone_number : '089994949494',
            city : 'youssouf',
            adresse : 'casablanca'
        })

        expect(res.statusCode).toBe(201)
    });

});



