import React, { useEffect, useState } from "react";
import { color, height } from "@mui/system";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Divider from '@mui/material/Divider';
import logo from "../imagenes/logo.svg";


import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import Box from '@mui/material/Box';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export default function MenuLateral() {
    const [openProgramas, setOpenProgramas] = React.useState(true);
    const [openActividades, setOpenActividades] = React.useState(true);

    const handleClickProgramas = () => {
        setOpenProgramas(!openProgramas);
    };
    const handleClickActividades = () => {
        setOpenActividades(!openActividades);
    };

    const defaultProps = {
        options: Instituciones,
        getOptionLabel: (option: IInstituciones) => option.Institucion,



    };
    const [value, setValue] = React.useState<IInstituciones | null>(null);

    return (

        <Box
            sx={{
                width: "13vw",
                height: "100vh ",
                backgroundColor: "#ffffff",
                display: "flex",
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >

            <Divider light />
            <Box sx={{
                //backgroundColor: "#B4C9D9",
                paddingTop: "3vh",
                width: "80%",
                height: "6%"
            }}>
                <img src={logo} style={{
                    width: "100%",
                    height: "70%",
                }} />
            </Box>

            <Box sx={{
                width: "70%",
                height: "15%",
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
            }}>

                <Avatar sx={{
                    bgcolor: deepOrange[500],
                    width: "72%",
                    height: "84%",
                    // display: "flex",
                    fontsize: "80"
                }}>
                    <b>PR</b>
                </Avatar>
            </Box>


            <Box sx={{
                textAlign: "center"
                //,backgroundColor: "#B4C9D9"
                ,
                font: "Sarala",
                fontSize: ""
            }}>
                Pedro Pardo
                <Divider light />
            </Box>

            <Box sx={{
                width: "95%",
                height: "5%",
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
                padding: "1vh"
                //backgroundColor: "#B4C9D9",
            }}>
                <Stack spacing={1} sx={{
                    width: "95%",
                    height: "95",
                    borderBlockStyle: "none"
                }}>
                    <Autocomplete

                        {...defaultProps}
                        id="blur-on-select"
                        blurOnSelect
                        renderInput={(params) => (
                            <TextField {...params} label="Institucion: " variant="standard" />
                        )}

                    />


                </Stack>
            </Box>

            <Box sx={{
                font: "Sarala",
                padding: "1vh"
            }}>
                Cargo
            </Box>
            <Box sx={{
                backgroundColor: "#DAECFA",

                width: "100%",
                height: "0.1vh"
            }}>

            </Box>
            <Divider light />
            <Box sx={{ width: '100%', height: "auto", bgcolor: 'background.paper', paddingTop: "2vh", fontSize: "h1" }}>
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">

                        </ListSubheader>
                    }
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <HomeOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Inicio" />
                    </ListItemButton>


                    <ListItemButton onClick={handleClickProgramas}>
                        <ListItemIcon>
                            <FolderOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Programas P." />
                        {openProgramas ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openProgramas} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>

                            <ListItemButton sx={{ pl: 2 }}>
                                <ListItemIcon>
                                    <TextSnippetOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="MIR" />
                            </ListItemButton>

                            <ListItemButton sx={{ pl: 2 }}>
                                <ListItemIcon>
                                    <AssignmentOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Meta Anual" />
                            </ListItemButton>

                            <ListItemButton sx={{ pl: 2 }}>
                                <ListItemIcon>
                                    <AssignmentOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Ficha Técnica" />
                            </ListItemButton>

                            <ListItemButton sx={{ pl: 2 }}>
                                <ListItemIcon>
                                    <LocationCityOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Actividades Inst." />
                            </ListItemButton>

                        </List>
                    </Collapse>



                </List>
            </Box>


            <Box sx={{
                backgroundColor: "#DAECFA",
                width: "100%",
                height: "0.1vh"
            }}>

            </Box>
            <Box sx={{ width: '100%', height: "auto", bgcolor: 'background.paper', paddingTop: "1vh" }}>
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <SettingsOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Configuración" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <LogoutOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Cerrar Sesión" />
                    </ListItemButton>

                </List>
            </Box>
        </Box>

    );
}

interface IInstituciones {
    Institucion: string;
}

const Instituciones = [
    { Institucion: 'DIF' },
    { Institucion: 'BIBLIOTECA CENTRAL DEL ESTADO' },
];