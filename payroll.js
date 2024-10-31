const payrollSchema = new mongoose.Schema({
    employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
    periodStart: { type: Date, required: true },
    periodEnd: { type: Date, required: true },
    grossPay: { type: Number, required: true },
    taxWithheld: { type: Number, required: true },
    netPay: { type: Number },
    paymentDate: Date,
    status: { type: String, enum: ['pending', 'paid'], default: 'pending' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Payroll', payrollSchema);