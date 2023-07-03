import { useEffect, useState, useMemo } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData"
import AdminPanelSettingsOutlined from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutLinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";


const Leagues = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [allLeagues, setAllLeagues] = useState([]);
    
    useEffect(() => {
        const fetchLeagues = async () => {
          fetch("http://localhost:4000/api/leagues")
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              setAllLeagues(data);
            });
        };
        fetchLeagues();
      }, []);

    const columns=[
        {field: "LeagueID", headerName: "ID"}, 
        {field: "Name", headerName: "Name", flex: 1, cellClassName: "name-column--cell"},
        {field: "TypeDescr", headerName: "Type", type: "number", headerAlign: "left", align: "left"},
        {field: "StartDate", headerName: "Start Date", flex: 1},
        {field: "EndDate", headerName: "End Date", flex: 1}
    ]

    return( 
        <Box m="20px">
            <Header title="My Leagues" subtitle="Leagues" />
            <Box
            m="40px 0 0 0" height="75vh">
                <DataGrid getRowId={(row) => row.LeagueID}
                    rows={allLeagues}
                    columns={columns}
                />
            </Box>

        </Box>
    )
}

export default Leagues;