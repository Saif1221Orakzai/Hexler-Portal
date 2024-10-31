const hrRecordSchema = new mongoose.Schema({
    employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
    leaveBalance: { type: Number, default: 0 },
    lastReviewDate: Date,
    performanceRating: { type: String, enum: ['poor', 'average', 'good', 'excellent'] },
    attendanceRate: { type: Number },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('HRRecord', hrRecordSchema);