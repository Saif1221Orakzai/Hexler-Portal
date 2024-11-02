// To implement a weekly audit log that evaluates all software projects 
// based on resource hours, budget, and adherence to the software engineering 
// process, we can enhance the AuditLog schema and create a structure that captures project 
// status evaluations.

// This requires adding fields to track:

// Resource hours
// Budget adherence
// Software engineering phase or milestone
// Overall project status

const mongoose = require('mongoose');

const auditLogSchema = new mongoose.Schema({
    actionType: { type: String, required: true },       // e.g., 'evaluation', 'update'
    tableName: { type: String, required: true },        // e.g., 'Project'
    recordId: { type: mongoose.Schema.Types.ObjectId, required: true }, // ID of project being evaluated
    performedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true }, // ID of evaluator
    
    // New fields for project audit information
    resourceHours: { type: Number, required: true },    // Total hours spent on project for the week
    budgetStatus: { type: String, enum: ['on budget', 'over budget', 'under budget'], required: true },
    projectPhase: { type: String, required: true },     // Current phase, e.g., 'Planning', 'Development', 'Testing'
    isOnTime: { type: Boolean, required: true },        // Indicates if the project is on schedule
    
    actionDetails: String,                              // Additional comments or specifics about evaluation
    actionDate: { type: Date, default: Date.now }       // Date of evaluation
});

module.exports = mongoose.model('AuditLog', auditLogSchema);