import ReactModal from "react-modal";
import "../styles/Settings.scss";

const modal = {
  content: {
    margin: "auto",
    width: "350px",
    height: "450px",
  },
};

const Settings = ({ isModalOpen, setIsModalOpen }) => {
  function handleSettings(event) {
    event.preventDefault();
    setIsModalOpen(false);
  }
  return (
    <ReactModal isOpen={isModalOpen} ariaHideApp={false} style={modal}>
      <h3 className="title">Settings</h3>
      <form>
        <div className="form-group">
          <label key="Currency">Currency</label>
          <select className="form-control">
            {/* MAPPED CURRENCIES HERE */}
          </select>
        </div>
        <div className="styleSubmitAndCloseButton">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(event) => {
              handleSettings(event);
            }}
          >
            Save
          </button>
          <button
            type="close"
            className="btn btn-primary"
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            Close
          </button>
        </div>
      </form>
    </ReactModal>
  );
};

export default Settings;
