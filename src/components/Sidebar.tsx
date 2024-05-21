import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import InventoryIcon from "@mui/icons-material/Inventory";
import { List, ListItemButton, Sheet, ListItem, Box } from "@mui/joy";
import GlobalStyles from "@mui/joy/GlobalStyles";
import ListItemContent from "@mui/joy/ListItemContent";
import Typography from "@mui/joy/Typography";

export default function Sidebar() {
  return (
    <Sheet
      sx={{
        position: { xs: "fixed", md: "fixed" },
        transform: {
          xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))",
          md: "none",
        },
        transition: "transform 0.4s, width 0.4s",
        zIndex: 9000,
        height: "100dvh",
        width: "var(--Sidebar-width)",
        top: 0,
        p: 1,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderColor: "background.level1",
      }}
    >
      {/* Global Styles */}
      <GlobalStyles
        styles={(theme) => ({
          ":root": {
            "--Sidebar-width": "220px",
            [theme.breakpoints.up("lg")]: {
              "--Sidebar-width": "240px",
            },
          },
        })}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <List
          size="sm"
          sx={{
            "--ListItem-radius": "10px",
            "--List-gap": "4px",
            marginTop: "80px",
          }}
        >
          {/* SideBar Item 1  */}
          <ListItem>
            <ListItemButton>
              <HomeRoundedIcon />
              <ListItemContent>
                <Typography level="title-sm">Home</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          {/* SideBar Item 2  */}
          <ListItem>
            <ListItemButton>
              <DashboardRoundedIcon />
              <ListItemContent>
                <Typography level="title-sm">Dashboard</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          {/* SideBar Item 3  */}
          <ListItem>
            <ListItemButton>
              <InventoryIcon />
              <ListItemContent>
                <Typography level="title-sm">Products</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>
          {/* SideBar Item 4 */}
          <ListItem>
            <ListItemButton>
              <GroupRoundedIcon />
              <ListItemContent>
                <Typography level="title-sm">User</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Sheet>
  );
}
