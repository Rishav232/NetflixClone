import React from 'react'
import { LineStyle, TrendingUp, Timeline, PersonOutline, BarChart, Email, ChatBubbleOutline, Work, Report, DynamicFeed, PlayCircleOutline, List } from '@mui/icons-material';
import "./sidebar.css"
import { Link } from 'react-router-dom';
const Sidebar = () => {

    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="menu">
                    <div className="listTitle">
                        Dashboard
                    </div>
                    <ul className="list">
                        <Link className="link" to="/">
                            <li className='listItem active'><LineStyle />
                                <span className='listContent'>Home</span>
                            </li>
                        </Link>

                        <li className='listItem'><TrendingUp />
                            <span className='listContent'>Analytics</span>
                        </li>
                        <li className='listItem'>
                            <Timeline />
                            <span className='listContent'>Sales</span>
                        </li>
                    </ul>
                </div>
                <div className="menu">
                    <div className="listTitle">
                        Quick Menu
                    </div>
                    <ul className="list">
                        <li className='listItem'><PersonOutline />
                            <span className='listContent'>Users</span>
                        </li>
                        <Link className="link" to="/products">
                            <li className='listItem'><PlayCircleOutline />
                                <span className='listContent'>Movies</span>
                            </li>
                        </Link>
                        <Link className="link" to="/list">
                        <li className='listItem'>
                            <List />
                            <span className='listContent'>List</span>
                        </li>
                        </Link>
                        <li className='listItem'>
                            <BarChart />
                            <span className='listContent'>Reports</span>
                        </li>
                    </ul>
                </div>
                <div className="menu">
                    <div className="listTitle">
                        Notifications
                    </div>
                    <ul className="list">
                        <li className='listItem'><Email />
                            <span className='listContent'>Mail</span>
                        </li>
                        <li className='listItem'><DynamicFeed />
                            <span className='listContent'>Feedback</span>
                        </li>
                        <li className='listItem'>
                            <ChatBubbleOutline />
                            <span className='listContent'>Messages</span>
                        </li>
                    </ul>
                </div>
                <div className="menu">
                    <div className="listTitle">
                        Staff
                    </div>
                    <ul className="list">
                        <li className='listItem'><Work />
                            <span className='listContent'>Manage</span>
                        </li>
                        <li className='listItem'><TrendingUp />
                            <span className='listContent'>Analytics</span>
                        </li>
                        <li className='listItem'>
                            <Report />
                            <span className='listContent'>Report</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar