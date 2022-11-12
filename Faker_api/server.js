const express = require('express');
const app = express();
const port = 8000;

// <=== Faker data ===>
const { faker } = require('@faker-js/faker');

const createNewUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        id: faker.datatype.uuid()
    };
    return newUser;
};
const newUser_var = createNewUser();
console.log(newUser_var);

// <=== New Company ===>
const createNewCompany = () => {
    const newCompany = {
        id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    };
    return newCompany;
}
const newCompany_var = createNewCompany();
console.log(newCompany_var);


// <==== Routes ===>
app.get('/api/users/new', (request, response) => {
    const newUser =  createNewUser()
    return response.json(newUser);
})

app.get('/api/companies/new', (request, response) => {
    const newCompany = createNewCompany()
    return response.json(newCompany);
})

app.get('/api/user/company', (request,response)=>{
    const newUser =  createNewUser()
    const newCompany = createNewCompany()
    return response.json({newCompany, newUser});
})


app.listen(port, () => {
    console.log(`Listening on port ${port} for request to respond to`)
})