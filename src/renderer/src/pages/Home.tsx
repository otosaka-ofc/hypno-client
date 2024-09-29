import SimpleBar from "simplebar-react";
import trickyTrials from "../assets/tricky-trials.jpg";
import "simplebar-react/dist/simplebar.min.css";
export default function Home() {
    return (
        <div className="w-screen h-screen">
            <SimpleBar className="avatar max-h-full items-center justify-items-center">
                <div className="mt-20 w-3/5">
                    <img src={trickyTrials} alt="" className="rounded-xl shadow-lg shadow-slate-400"/>
                </div>
            </SimpleBar>
        </div>
    );
}
