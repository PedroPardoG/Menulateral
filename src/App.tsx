//import * as React from 'react';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from "react";
import { color, height } from "@mui/system";
import MenuLateral from '../src/Componentes/MenuLateral';




export default function BoxSx() {

  return (<Box sx={{
    backgroundColor: "#f4f7fe",
    display: "flex"

  }}
  ><MenuLateral></MenuLateral>
  </Box>);
  
}
