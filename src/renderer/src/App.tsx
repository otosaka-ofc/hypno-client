import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Instances from "./pages/Instances";
import { IoClose, IoExtensionPuzzle, IoHome, IoTerminal } from "react-icons/io5";
import { TbLayersSubtract } from "react-icons/tb";
import { IoIosRemove } from "react-icons/io";
import { FaCubes, FaInfoCircle } from "react-icons/fa";
import { LuPackageOpen } from "react-icons/lu";
import { TiThMenu } from "react-icons/ti";
import { RiAccountPinCircleFill } from "react-icons/ri";

import HypnoLogo from "./assets/hypnos.svg";

function App(): JSX.Element {
    return (
        <BrowserRouter>
            <div className="drawer overflow-hidden lg:drawer-open">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="navbar bg-base-300 w-full drag fixed z-30">
                        <div className="flex-1">
                            <div className="flex-none lg:hidden">
                                <label
                                    htmlFor="my-drawer-3"
                                    aria-label="open sidebar"
                                    className="btn btn-square btn-ghost no-drag"
                                >
                                    <TiThMenu className="w-7 h-7 text-base-content font-bold" />
                                </label>
                            </div>
                            <img src={HypnoLogo} alt="" className="w-10 h-10 mt-2 ms-2" />

                            <div className="flex-1 text-base-content font-bold text-2xl ms-1 h-full">
                                Hypno Client
                            </div>
                        </div>
                    </div>
                    {/* Page content here */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/instances" element={<Instances />} />
                    </Routes>
                </div>
                <div className="drawer-side z-40">
                    <label
                        htmlFor="my-drawer-3"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                    ></label>

                    <ul className="menu bg-base-200 min-h-full w-80 p-4 no-drag text-xl">
                        {/* Sidebar content here */}
                        <div className="text-center w-full h-40 mb-4 bg-neutral rounded-md">
                            <div className="mt-2">
                                <img src={HypnoLogo} alt="" className="w-20 h-20 me-auto ms-auto" />
                                <span className="font-bold text-2xl">Hypno Client</span>
                            </div>
                            <span className="font-thin">v 1.0.0</span>
                        </div>

                        <li className="mb-2 text-primary hover:ms-2 duration-200">
                            <NavLink
                                to="/"
                                onClick={() => {
                                    let checkbox: any = document.getElementById("my-drawer-3");
                                    checkbox.checked = false;
                                }}
                            >
                                <IoHome className="w-6 h-6" />
                                Home
                            </NavLink>
                        </li>
                        <li className="mb-2 text-primary hover:ms-2 duration-200">
                            <NavLink
                                to="/profiles"
                                onClick={() => {
                                    let checkbox: any = document.getElementById("my-drawer-3");
                                    checkbox.checked = false;
                                }}
                            >
                                <RiAccountPinCircleFill className="w-6 h-6" />
                                Profiles
                            </NavLink>
                        </li>
                        <li className="mb-2 text-primary hover:ms-2 duration-200">
                            <NavLink
                                to="/instances"
                                onClick={() => {
                                    let checkbox: any = document.getElementById("my-drawer-3");
                                    checkbox.checked = false;
                                }}
                            >
                                <FaCubes className="w-6 h-6" />
                                Instances
                            </NavLink>
                        </li>
                        <li className="mb-2 text-primary hover:ms-2 duration-200">
                            <NavLink
                                to="/mods"
                                onClick={() => {
                                    let checkbox: any = document.getElementById("my-drawer-3");
                                    checkbox.checked = false;
                                }}
                            >
                                <IoExtensionPuzzle className="w-6 h-6" />
                                Mods
                            </NavLink>
                        </li>
                        <li className="mb-2 text-primary hover:ms-2 duration-200">
                            <NavLink
                                to="/src-packs"
                                onClick={() => {
                                    let checkbox: any = document.getElementById("my-drawer-3");
                                    checkbox.checked = false;
                                }}
                            >
                                <LuPackageOpen className="w-6 h-6" />
                                Resource Packs
                            </NavLink>
                        </li>
                        <li className="mb-2 text-primary hover:ms-2 duration-200">
                            <NavLink
                                to="/console"
                                onClick={() => {
                                    let checkbox: any = document.getElementById("my-drawer-3");
                                    checkbox.checked = false;
                                }}
                            >
                                <IoTerminal className="w-6 h-6" />
                                Console
                            </NavLink>
                        </li>
                        <li className="mb-2 text-primary hover:ms-2 duration-200">
                            <NavLink
                                to="/about"
                                onClick={() => {
                                    let checkbox: any = document.getElementById("my-drawer-3");
                                    checkbox.checked = false;
                                }}
                            >
                                <FaInfoCircle className="w-6 h-6" />
                                About
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="flex-none absolute right-0 z-50 m-2">
                    <div className="tooltip tooltip-bottom" data-tip="minimize">
                        <button
                            className="btn text-center me-2 hover:bg-neutral hover:font-extrabold hover:rounded-md no-drag"
                            onClick={window.api.minimizeApp}
                        >
                            <IoIosRemove className="w-6 h-6 font-bold text-base-content" />
                        </button>
                    </div>
                    <div className="tooltip tooltip-bottom" data-tip="max-or-reset">
                        <button
                            className="btn text-center me-2 hover:bg-neutral hover:rounded-md no-drag"
                            onClick={window.api.toggleMaximizing}
                        >
                            <TbLayersSubtract className="w-6 h-6 font-bold text-base-content" />
                        </button>
                    </div>
                    <div className="tooltip tooltip-bottom" data-tip="close">
                        <button
                            className="btn text-center hover:bg-error hover:font-extrabold hover:rounded-md no-drag"
                            onClick={window.api.closeApp}
                        >
                            <IoClose className="w-6 h-6 font-bold text-base-content" />
                        </button>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
