const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: 'Token.csv',
    header: [
        { id: 'name', title: 'Name' },
        { id: 'surname', title: 'Surname' },
        { id: 'age', title: 'Age' },
        { id: 'gender', title: 'Gender' },
    ]
});

const data = [
    {
        name: 'John',
        surname: 'Snow',
        age: 26,
        gender: 'Male'
    }, {
        name: 'Clair',
        surname: 'White',
        age: 33,
        gender: 'Female',
    }, {
        name: 'Fancy',
        surname: 'Brown',
        age: 78,
        gender: 'Female'
    },
    {
        name: 'Nicholas',
        surname: 'kipkoech',
        age: 22,
        gender: 'male'
    }
];

csvWriter
    .writeRecords(data)
    .then(() => console.log('The CSV file was written successfully'));