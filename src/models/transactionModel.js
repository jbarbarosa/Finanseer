import mongoose from 'mongoose';

const transactionSchema = mongoose.Schema({
  isConfirmed : { //conta corrente, poupança etc.
    type: Boolean,
    default: false
  },
  amount: {
    type: Number,
    required: true,
  },
  isInbound: { // true para entrada, false para saida
    type: Boolean,
    required: true,
  },
  accountId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
    required: true
  }
}, {
  timestamps: true
});

const Transaction = mongoose.model('Transaction', transactionSchema);
export default Transaction;
