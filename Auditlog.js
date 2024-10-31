const auditLogSchema = new mongoose.Schema({
    actionType: { type: String, required: true },
    tableName: { type: String, required: true },
    recordId: { type: mongoose.Schema.Types.ObjectId, required: true },
    performedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
    actionDetails: String,
    actionDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('AuditLog', auditLogSchema);