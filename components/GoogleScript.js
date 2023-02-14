import { useEffect } from "react";

const GoogleScript = () => {
  const handleGoogle = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-E0TWC6JFDC");
  };

  useEffect(() => {
    handleGoogle();
  }, []);
};

export default GoogleScript;
