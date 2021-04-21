import React from 'react';
import { useLocation } from 'react-router-dom';

type NavItemType = {
    name: string;
    path: string;
};

const rootpath = "flyingcowwebsite";

const navItems: NavItemType[] = [
    {
        name: "Home",
        path: "/home"
    },
    {
        name: "About Us",
        path: "/about"
    },
    {
        name: "Store",
        path: "/store"
    },
    {
        name: "News",
        path: "/news"
    }
];

const Navbar: React.FC = () => {
    let pathname = useLocation().pathname;

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light float-left">
            <a className="navbar-brand" href="/">FlyingCow</a>

            <div>
                <ul className="navbar-nav mr-auto">
                    {
                        navItems.map((item) => (
                            <li className={`nav-item ${pathname === item.path ? "active": null}`}>
                                <a className="nav-link" href={rootpath + item.path}>{item.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;