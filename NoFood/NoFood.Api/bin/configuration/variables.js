const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {
        connection: process.env.connection || 'mongodb+srv://nofoodadmin:admin123@cluster0-hserh.mongodb.net/test?retryWrites=true&w=majority'
    }
};

module.exports = variables;