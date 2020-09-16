  
import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';  


function BoutonInstallPWA() {
  return (
    <Button variant="primary" size="lg" block id="boutonInstall">
      Install Spider App
    </Button>
  );
}

export default BoutonInstallPWA;