const Nicolas = {
    name: "Nico",
    age: "10",
    gender: "None"
};

const resolvers = {
    Query: {
        person: () => Nicolas
    }
};

export default resolvers;