import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema({
    title: { type: String, required: false },
    patientName: { type: String, required: true },
    email: { type: String, required: true },
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    age: { type: Number },
    weight: { type: Number },
    gender: { type: String, enum: ['Male', 'Female', 'Other'] },
    height: { type: Number },
    location: { type: String },
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
    report: { type: String, required: false },
}, { timestamps: true });

const Session = mongoose.models.Session || mongoose.model('Session', sessionSchema);

export default Session;
