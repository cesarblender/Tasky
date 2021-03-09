import mongoose from 'mongoose';

export async function connect(): Promise<void> {
    const uri =
        process.env['DB_URI'] || 'mongodb://localhost:27017/mongo-tasky-app';

    try {
        await mongoose.connect(uri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log('Database connected successfully!');
        console.log(uri);
    } catch (error) {
        console.error(error);
    }
}
