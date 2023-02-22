import { Sequelize } from 'sequelize'
export class DbConfig {

    public async startConnection(): Promise<Sequelize | null> {
        const connection = new Sequelize({
            dialect: 'mysql',
            host: 'localhost',
            username: 'root',
            password: '02121441',
        })

        try {
            await connection.authenticate();
            console.log('Connection has been established successfully.');
            return connection;
        } catch (error) {
            console.error('Unable to connect to the database:', error);
            return null
        }

    }
}