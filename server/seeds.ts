const Expertise = require('./models/expertise.model');

//Data for seeding the database
let data = [
    {
        name: 'R&D'
    },
    {
        name: 'QA'
    },    
    {
        name: 'UI/UX'
    },
    {
        name: 'IT'
    }
]

//function for seeding the database with the data
async function seedDB() {
    const res = await Expertise.deleteMany();
    if(res) {
        console.log('Expertises Deleted Successfully');
    }
    
    await Expertise.create(data);
    console.log("Expertises Created");
}

module.exports = seedDB;