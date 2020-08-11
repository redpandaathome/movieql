export const people = [
    {
        id: "1",
        name: "Nico",
        age: "10",
        gender: "None"
    },
    {   
        id: "2",
        name: "Neko",
        age: "100",
        gender: "None"
    }
];

export const getById = id => {
    const filteredPeople =people.filter(person=>String(id) === person.id);
    return filteredPeople[0];
}

