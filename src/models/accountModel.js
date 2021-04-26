import mongoose from 'mongoose';

const accountSchema = mongoose.Schema({
  bankName : {
    type: String,
    require: true
  },
  typeOfAccount : { //conta corrente, poupança etc.
    type: String,
    required: true,
    default: "corrente"
  },
  number: {
    type: Number,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
    default: 0 
  },
  active: {
    type: Boolean,
    default: true,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  transactions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Transaction'
  }]
}, {
  timestamps: true
});

const Account = mongoose.model('Account', accountSchema);
export default Account;
