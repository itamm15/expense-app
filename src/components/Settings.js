import ReactModal from "react-modal";
import { FIXER_API_KEY } from "../config";
import "../styles/Settings.scss";

const modal = {
  content: {
    margin: "auto",
    width: "350px",
    height: "450px",
  },
};

const Settings = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <ReactModal isOpen={isModalOpen} ariaHideApp={false} style={modal}>
      <h3 className="title">Settings</h3>
      <form>
        <div className="form-group">
          <label key="Currency">
            <select>{/* MAPPED CURRENCIES HERE */}</select>
          </label>
        </div>
      </form>
    </ReactModal>
  );
};

export default Settings;
