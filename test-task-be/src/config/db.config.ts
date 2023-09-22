const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER || 'postgres_user',
    password: process.env.DB_PASSWORD || 'qwerty12!',
    database: process.env.DB_DATABASE || 'user_testing_application',
    dialect: process.env.DB_DATABASE || "postgres",
    dialectOptions: {
        createDatabaseIfNotExists: true,
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

export default dbConfig;