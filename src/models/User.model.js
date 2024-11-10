import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    _id: { type: Number, required: true },
    title: { type: String, required: true },
    patientName: { type: String, required: true },
    email: { type: String, required: true },
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    age: { type: Number },
    weight: { type: Number },
    gender: { type: String, enum: ['Male', 'Female', 'Other'] },
    height: { type: Number },
    location: { type: String },
    sessions: { type: Number, enum: [0, 1, 2, 3], default: 0 },
    bloodSugarLevel: { type: Number },
    BP: {
        diastolic: { type: Number },
        systolic: { type: Number }
    },
    oxygenLevel: { type: Number },
    dietary: { type: String },
    alcoholConsumption: { type: Boolean },
    recreationalDrugUse: { type: Boolean },
    constantFatigue: { type: Boolean },
    report: { type: String, required: true },
    chatbotResponses: [
        {
            question: { type: String, required: true },
            answer: { type: String, required: true }
        }
    ]
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
