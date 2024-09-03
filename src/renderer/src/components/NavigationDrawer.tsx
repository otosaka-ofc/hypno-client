import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { TbLayersSubtract } from "react-icons/tb";
import { IoIosRemove } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { FaCubes } from "react-icons/fa";
import { IoExtensionPuzzle } from "react-icons/io5";
import { IoTerminal } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import { LuPackageOpen } from "react-icons/lu";

import HypnoLogo from "../assets/hypnos.svg";

function NavigationDrawer() {
    return (
        <div className="drawer overflow-hidden lg:drawer-open">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="navbar bg-base-300 w-full drag">
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
                        <div className="hidden flex-none">
                            <ul className="menu menu-horizontal">
                                {/* Navbar menu content here */}
                                <li>
                                    <a>Navbar Item 1</a>
                                </li>
                                <li>
                                    <a>Navbar Item 2</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex-none">
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
                {/* Page content here */}
                Content
            </div>
            <div className="drawer-side">
                <label
                    htmlFor="my-drawer-3"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>

                <ul className="menu bg-base-200 min-h-full w-80 p-4 no-drag text-xl">
                    {/* Sidebar content here */}
                    <div className="text-center w-full h-28 mb-10">
                        <div>
                            <img src={HypnoLogo} alt="" className="w-20 h-20 me-auto ms-auto" />
                            <span className="font-bold text-2xl">Hypno Client</span>
                        </div>
                        <span className="font-thin">v 1.0.0</span>
                    </div>
                    <li className="mb-2 text-primary hover:ms-2 duration-200">
                        <a>
                            <IoHome className="w-6 h-6" />
                            Home
                        </a>
                    </li>
                    <li className="mb-2 text-primary hover:ms-2 duration-200">
                        <a>
                            <FaCubes className="w-6 h-6" />
                            Instances
                        </a>
                    </li>
                    <li className="mb-2 text-primary hover:ms-2 duration-200">
                        <a>
                            <IoExtensionPuzzle className="w-6 h-6" />
                            Mods
                        </a>
                    </li>
                    <li className="mb-2 text-primary hover:ms-2 duration-200">
                        <a>
                            <LuPackageOpen className="w-6 h-6" />
                            Resource Packs
                        </a>
                    </li>
                    <li className="mb-2 text-primary hover:ms-2 duration-200">
                        <a>
                            <IoTerminal className="w-6 h-6" />
                            Console
                        </a>
                    </li>
                    <li className="mb-2 text-primary hover:ms-2 duration-200">
                        <a>
                            <FaInfoCircle className="w-6 h-6" />
                            About
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default NavigationDrawer;
