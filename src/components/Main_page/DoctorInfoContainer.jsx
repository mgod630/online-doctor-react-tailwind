import { Link } from "react-router-dom";
import Image from "../Image";
import LesserThanIcon from "../LesserThanIcon";

const DoctorInfoContainers = ({ doctor }) => {
    return (
        <Link
            to={`/details/${doctor.email}`}
            className="bg-white flex justify-between rounded-md items-center p-2 w-full mx-auto shadow-md my-3 cursor-pointer hover:bg-slate-200 duration-300"
        >
            <LesserThanIcon />
            <div className="flex items-center text-xs font-semibold">
                <div>
                    <p className="">
                        {doctor.name.first + " " + doctor.name.last}
                    </p>
                    <p className="my-1 text-slate-700">{doctor.email}</p>
                    <p style={{ direction: "rtl" }} className="text-slate-400 font-normal">
                        {doctor.registered.age} سال سابقه
                    </p>
                </div>
                <Image
                    src={doctor.picture.thumbnail}
                    alt={doctor.name.first + " " + doctor.name.last}
                />
            </div>
        </Link>
    );
};
export default DoctorInfoContainers;
