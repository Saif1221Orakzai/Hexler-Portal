const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: String,
    dateOfBirth: Date,
    hireDate: { type: Date, required: true },
    position: String,
    status: { type: String, enum: ['active', 'inactive', 'terminated'], default: 'active' },
    address: {
        street: String,
        city: String,
        state: String,
        zip: String
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department'
    },
    salary: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Employee', employeeSchema);