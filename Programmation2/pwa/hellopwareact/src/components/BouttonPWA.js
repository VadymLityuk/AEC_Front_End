  
import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';  


function BoutonPWA() {
  return (
    <Button variant="primary" size="lg" block id="boutonInstall">
      Install App
    </Button>
  );
}

export default BoutonPWA;