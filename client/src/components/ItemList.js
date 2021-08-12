import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

 const mainListItems = ({changeStatus}) =>{
     return (
      <List>
          <div>
          <ListItem button>
          <ListItemIcon>
              <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
          <ListItemIcon>
              <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText onClick={()=> changeStatus(1, null)} primary="Add Products" />
          </ListItem>
          <ListItem button>
          <ListItemIcon>
              <PeopleIcon />
          </ListItemIcon>
          <ListItemText onClick={()=> changeStatus(0, null)} primary="Products" />
          </ListItem>
          <ListItem button>
          <ListItemIcon>
              <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
          </ListItem>
          <ListItem button>
          <ListItemIcon>
              <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Integrations" />
          </ListItem>
          </div>
      </List>
  );
 }
export default mainListItems;
// export const secondaryListItems = (
//   <div>
//     <ListSubheader inset>Saved reports</ListSubheader>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItem>
//   </div>
// );