import { IoIosRemove } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { TbLayersSubtract } from "react-icons/tb";
import { TiThMenu } from "react-icons/ti";

import HypnoLogo from "../assets/hypnos.svg";

export default function NavBar() {
    return (
        <>
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
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
        </>
    );
}
