const mongoose = require('mongoose');
const schema = mongoose.Schema({
    category_name: { type: String },
    is_active: { type: Boolean, required: true, default: true },
    created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true }
},
{
    versionKey: false,
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

class Categories extends mongoose.Model {}

schema.loadClass(Categories);
module.exports = mongoose.model('Categories', schema);
