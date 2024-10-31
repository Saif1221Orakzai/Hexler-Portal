const employeeBenefitsSchema = new mongoose.Schema({
    employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
    benefitType: { type: String, enum: ['health', 'retirement', 'education', 'other'], required: true },
    description: String,
    benefitValue: Number,
    startDate: Date,
    endDate: Date,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('EmployeeBenefits', employeeBenefitsSchema);