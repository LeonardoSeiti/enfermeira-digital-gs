import React from 'react';
import * as Icon from 'react-feather'; 

const FeatherIcon = ({ icon, size = 24, color = 'currentColor', ...rest }) => {
  const SelectedIcon = Icon[icon]; 
  if (!SelectedIcon) return null; 

  return <SelectedIcon size={size} color={color} {...rest} />;
};

export default FeatherIcon;
