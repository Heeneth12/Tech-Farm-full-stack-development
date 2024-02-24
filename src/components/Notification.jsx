import React, { useState, useEffect } from "react";

function Notification(props) {
  const [show, setShow] = useState(props.show);

  const hideAlert = () => {
    setShow(false);
  };

  useEffect(() => {
    // Update the show state when props.show changes
    setShow(props.show);
  }, [props.show]);

  return (
    <>
      {show && (
        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mt-4 m-4 roundes-lg">
          <div className="flex items-center justify-between">
            <p>Success</p>
            <button
              className="text-sm text-blue-500 focus:outline-none"
              onClick={hideAlert}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Notification;
