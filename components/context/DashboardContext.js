import React, { createContext, useState, useContext } from "react";

const DashboardContext = createContext();

export const useDashboardContext = () => {
  return useContext(DashboardContext);
};

export const DashboardProvider = ({ children }) => {
  const [dashboardState, setDashboardState] = useState("default");

  const setDashboardView = (view) => {
    setDashboardState(view);
  };

  const value = {
    dashboardState,
    setDashboardView,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};
