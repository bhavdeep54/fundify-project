import express from "express";
import Wallet from "../models/Wallet.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// ✅ GET /api/wallet - Fetch holdings
router.get("/", verifyToken, async (req, res) => {
  try {
    const wallet = await Wallet.findOne({ userId: req.userId });
    res.json(wallet ? wallet.assets : []);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ POST /api/wallet/add - Add funds
router.post("/add", verifyToken, async (req, res) => {
  const { name, amount, value } = req.body;
  try {
    let wallet = await Wallet.findOne({ userId: req.userId });
    if (!wallet) {
      wallet = new Wallet({ userId: req.userId, assets: [] });
    }
    wallet.assets.push({ name, amount, value });
    await wallet.save();
    res.json(wallet.assets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ DELETE /api/wallet/withdraw - Withdraw funds
router.delete("/withdraw", verifyToken, async (req, res) => {
  const { name } = req.body;
  try {
    const wallet = await Wallet.findOne({ userId: req.userId });
    if (!wallet) return res.status(404).json({ error: "Wallet not found" });

    wallet.assets = wallet.assets.filter(asset => asset.name !== name);
    await wallet.save();
    res.json(wallet.assets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
