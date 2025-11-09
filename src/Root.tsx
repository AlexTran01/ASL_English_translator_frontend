import React, { useState } from "react";
import App from "./App";
import WelcomePage from "./WelcomePage";

const Root: React.FC = () => {
  const [inApp, setInApp] = useState(false);

  const handleEnterApp = () => setInApp(true);
  const handleGoHome = () => setInApp(false);

  if (!inApp) {
    return <WelcomePage onEnterApp={handleEnterApp} />;
  }

  return <App onGoHome={handleGoHome} />;
};

export default Root;
