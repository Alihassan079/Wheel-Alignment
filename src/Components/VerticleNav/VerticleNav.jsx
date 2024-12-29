import React from 'react';


const VerticalNav = () => {
  return (
    <ul className="nav flex-column nav-pills" id="v-pills-dashboard" role="tablist" aria-orientation="vertical">
      <button
        className="nav-link active "
        id="v-pills-dashboard-tab"
        data-bs-toggle="pill"
        data-bs-target="#admin-dashboard"
        type="button"
        role="tab"
        aria-controls="admin-dashboard"
        aria-selected="true"
      >
        Home
      </button>
      <button
        className="nav-link"
        id="v-pills-profile-tab"
        data-bs-toggle="pill"
        data-bs-target="#v-pills-profile"
        type="button"
        role="tab"
        aria-controls="v-pills-profile"
        aria-selected="false"
      >
        Profile
      </button>
      <button
        className="nav-link"
        id="v-pills-messages-tab"
        data-bs-toggle="pill"
        data-bs-target="#v-pills-messages"
        type="button"
        role="tab"
        aria-controls="v-pills-messages"
        aria-selected="false"
      >
        Messages
      </button>
      <button
        className="nav-link"
        id="v-pills-settings-tab"
        data-bs-toggle="pill"
        data-bs-target="#v-pills-settings"
        type="button"
        role="tab"
        aria-controls="v-pills-settings"
        aria-selected="false"
      >
        Settings
      </button>
    </ul>
  );
};

export default VerticalNav;