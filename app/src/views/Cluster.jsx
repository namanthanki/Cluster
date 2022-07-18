import { lazy } from "react";
import "./styles/cluster.css"

const TokensList = lazy(() => import("../components/TokensList"));

const ListAddresses = [
    { address: "adhfsdiofghslfsfhl", value: 0.42332 },
    { address: "xasddahooahdaldasd", value: 1.32423 },
    { address: "qeudaldaldjqdssdkc", value: 5.23232 },
  ]

const Cluster = () => {
    return (
        <div className="cluster-container">
            <div className="cluster-header">
                <h2 className="cluster-title">Cluster Name</h2>
                <p className="cluster-supply">Total Supply: xxxxxx</p>
            </div>
            <div className="lists-container">
                <TokensList addresses={ListAddresses} />
            </div>
            <div className="cluster-buttons">
                <button className="btn">Issue</button>
                <button className="btn">Redeem</button>
                <button className="btn">Lock</button>
                <button className="btn">Unlock</button>
            </div>
            <div className="cluster-footer">
                <p className="footer-text">Total Locked Clusters: 0</p>
            </div>
        </div>
    );
};

export default Cluster;