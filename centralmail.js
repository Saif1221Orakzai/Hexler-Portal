const centralMailingSchema = new mongoose.Schema({
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
    recipientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
    subject: String,
    message: String,
    attachmentUrl: String,
    sentDate: { type: Date, default: Date.now },
    readStatus: { type: Boolean, default: false }
});

module.exports = mongoose.model('CentralMailing', centralMailingSchema);