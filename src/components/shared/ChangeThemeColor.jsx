import React, { useEffect } from 'react';

const ChangeThemeColor = ({ color }) => {
  useEffect(() => {
    // Get the meta tag
    const metaThemeColor = document.querySelector("meta[name=theme-color]");
    
    // Update the theme color
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", color);
    }
  }, [color]);

  return null;
};

export default ChangeThemeColor;