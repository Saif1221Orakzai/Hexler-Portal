const mongoose = require('mongoose');

const financePayrollSchema = new mongoose.Schema({
    employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
    baseSalary: { type: Number, required: true },
    bonus: { type: Number, default: 0 },
    deduction: { type: Number, default: 0 },
    periodStart: { type: Date, required: true },
    periodEnd: { type: Date, required: true },
    grossPay: { type: Number, required: true },
    taxWithheld: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'paid'], default: 'pending' },
    netSalary: { type: Number },       // Calculated as baseSalary + bonus - deduction
    netPay: { type: Number },           // Calculated as grossPay - taxWithheld
    salaryDate: { type: Date, required: true }, // Typically pay date
    paymentDate: { type: Date },        // Date of payment
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('FinancePayroll', financePayrollSchema);