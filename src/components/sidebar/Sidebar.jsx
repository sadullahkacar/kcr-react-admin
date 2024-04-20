import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
          <Link to="/" style={{textDecoration:"none"}}>
          <span className="logo">KCRadmin</span>
          </Link>
        </div>
        <hr />
        <div className="center">
          <ul>
            <p className="title">MAIN</p>
            <li>
              <DashboardIcon className="icon" />
              <Link to="/" style={{ textDecoration:"none"}}>
              <span>Dashboard</span>
              </Link>
            </li>
            <p className="title">LIST</p>
            <li>
              <PersonOutlineOutlinedIcon className="icon"/>
              <Link to="/users" style={{textDecoration:"none"}}>
              <span>Users</span>
              </Link>
            </li>
            <li>
              <StoreIcon className="icon"/>
              <Link to="/products/new" style={{ textDecoration:"none"}}>
              <span>Products</span>
              </Link>
            </li>
            <li>
              <CreditCardIcon className="icon"/>
              <span>Orders</span>
            </li>
            <li>
              <LocalShippingIcon className="icon"/>
              <span>Delivery</span>
            </li>
            <p className="title">USEFUL</p>
            <li>
              <AssessmentIcon className="icon"/>
              <span>Stats</span>
            </li>
            <li>
              <NotificationsNoneOutlinedIcon className="icon"/>
              <span>Notifications</span>
            </li>
            <p className="title">SERVICE</p>
            <li>
              <SettingsSystemDaydreamOutlinedIcon className="icon"/>
              <span>System Health</span>
            </li>
            <li>
              <PsychologyOutlinedIcon className="icon"/>
              <span>Logs</span>
            </li>
            <li>
              <SettingsApplicationsIcon className="icon"/>
              <span>Settings</span>
            </li>
            <p className="title">USER</p>
            <li>
              <AccountCircleOutlinedIcon className="icon"/>
              <span>Profile</span>
            </li>
            <li>
              <LogoutOutlinedIcon className="icon"/>
              <span>Logout</span>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <div className="colorOption"></div>
          <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar