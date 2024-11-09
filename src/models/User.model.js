import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    number: { type: String, required: false, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
},
{
    timestamps: true,
}
);

export default mongoose.models.User || mongoose.model('User', UserSchema);
