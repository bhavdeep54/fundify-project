import mongoose from "mongoose";

const AssetSchema = new mongoose.Schema({
  name: String,
  amount: Number,
  value: Number,
  date: { type: Date, default: Date.now }
});

const WalletSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  assets: [AssetSchema]
});

export default mongoose.model("Wallet", WalletSchema);
