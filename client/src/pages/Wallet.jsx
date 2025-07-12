import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import axios from "axios";
import "../components/Wallet.css";


export default function Wallet() {
  const [holdings, setHoldings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [assetName, setAssetName] = useState("");
  const [amount, setAmount] = useState(0);
  const [value, setValue] = useState(0);

  // Load from backend
  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/wallet", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setHoldings(res.data);
      } catch (err) {
        console.error("Error fetching holdings:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchHoldings();
  }, []);

  const handleAddFunds = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "http://localhost:5000/api/wallet/add",
        { name: assetName, amount: Number(amount), value: Number(value) },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setHoldings(res.data);
      setShowAddModal(false);
      setAssetName("");
      setAmount(0);
      setValue(0);
    } catch (err) {
      console.error(err);
    }
  };

  const handleWithdrawFunds = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.delete(
        "http://localhost:5000/api/wallet/withdraw",
        {
          headers: { Authorization: `Bearer ${token}` },
          data: { name: assetName }
        }
      );
      setHoldings(res.data);
      setShowWithdrawModal(false);
      setAssetName("");
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <div className="wallet-loading">Loading wallet data...</div>;
  }

  if (!holdings) {
    return <div className="wallet-error">Could not load wallet</div>;
  }

  const totalBalance = holdings.reduce((sum, h) => sum + h.value, 0);

  return (
    <div className="wallet-container">
      <div className="wallet-card">
        <h1 className="wallet-title">Your Wallet</h1>

        <div className="wallet-balance">
          <h2 className="wallet-balance-title">Total Balance</h2>
          <p className="wallet-balance-value">${totalBalance.toLocaleString()}</p>
        </div>

        <h3 className="wallet-section-title">Holdings</h3>
        <table className="wallet-table">
          <thead className="wallet-thead">
            <tr>
              <th className="wallet-th">Asset</th>
              <th className="wallet-th">Amount</th>
              <th className="wallet-th">Value (USD)</th>
            </tr>
          </thead>
          <tbody>
            {holdings.map((h, i) => (
              <tr key={i} className="border-t">
                <td className="wallet-td">{h.name}</td>
                <td className="wallet-td wallet-td-center">{h.amount}</td>
                <td className="wallet-td wallet-td-center">${h.value.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex gap-4">
          <button
            className="wallet-button-primary"
            onClick={() => setShowAddModal(true)}
          >
            Add Funds
          </button>
          <button
            className="wallet-button-secondary"
            onClick={() => setShowWithdrawModal(true)}
          >
            Withdraw
          </button>
        </div>
      </div>

      {/* Add Funds Modal */}
      <Modal title="Add Funds" isOpen={showAddModal} onClose={() => setShowAddModal(false)}>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Asset Name"
            className="wallet-modal-input"
            value={assetName}
            onChange={(e) => setAssetName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Amount"
            className="wallet-modal-input"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            type="number"
            placeholder="Value in USD"
            className="wallet-modal-input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            className="wallet-modal-button-add"
            onClick={handleAddFunds}
          >
            Add Asset
          </button>
        </div>
      </Modal>

      {/* Withdraw Modal */}
      <Modal title="Withdraw Funds" isOpen={showWithdrawModal} onClose={() => setShowWithdrawModal(false)}>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Asset Name to Withdraw"
            className="wallet-modal-input"
            value={assetName}
            onChange={(e) => setAssetName(e.target.value)}
          />
          <button
            className="wallet-modal-button-withdraw"
            onClick={handleWithdrawFunds}
          >
            Withdraw Asset
          </button>
        </div>
      </Modal>
    </div>
  );
}
