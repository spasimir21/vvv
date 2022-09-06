import "./ScanPage.scss";

export const ScanPage = () => {
  return (
    <div className="scan-page">

      <div className="scan-camera-container">
          <h2>Scan Product</h2>
          <div className="scan-box"></div>
      </div>

      <div className="scan-description-container">
        <p>
          Scan your product here and add it to your list
        </p>
      </div>

    </div>
  );
};
