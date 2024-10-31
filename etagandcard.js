const etagCardApplicationSchema = new mongoose.Schema({
    employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
    applicationType: { type: String, enum: ['etag', 'card'], required: true },
    applicationStatus: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
    issueDate: Date,
    expiryDate: Date,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('EtagCardApplication', etagCardApplicationSchema);
