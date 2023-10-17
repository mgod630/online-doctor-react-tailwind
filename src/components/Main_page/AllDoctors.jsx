import { useEffect, useState } from "react";
import * as Icon from "react-feather";
import DoctorInfoContainers from "./DoctorInfoContainer";

const AllDoctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        callDoctors();
    }, []);

    const callDoctors = async () => {
        const res = await fetch("https://randomuser.me/api/?results=15");
        const data = await res.json();
        localStorage.setItem("data", JSON.stringify(data.results));
        setDoctors(data.results);
    };

    return (
        <>
            <div className="w-full bg-white p-3 flex justify-between">
                <button className="p-2 rounded-md bg-blue-500 text-white flex">
                    <span>
                        <Icon.Activity className="p-1" />
                    </span>
                    فیلتر{" "}
                </button>
                <div className="bg-slate-200 w-full rounded-md flex px-3 ml-2 items-center justify-end">
                    <input
                        type="text"
                        className="bg-slate-200 border w-full focus:outline-none py-1 text-sm text-center font-semibold placeholder:text-xs"
                        placeholder="جستجوی نام، کد پذیرش"
                    />
                    <Icon.Search className="text-slate-400" />
                </div>
            </div>
            <div className="h-[80vh] overflow-auto px-3 mt-1">
                <p className="my-3 font-semibold text-sm">لیست پزشکان</p>
                {doctors &&
                    doctors.map((doctor) => {
                        return (
                            <div key={doctor.phone}>
                                <DoctorInfoContainers doctor={doctor} />
                            </div>
                        );
                    })}
                {doctors.length === 0 && (
                    <Icon.Loader className="mx-auto my-64 animate-spin-slow" />
                )}
            </div>
            <div className="bg-white text-slate-400 p-3 flex flex-row-reverse justify-around gap-2 sm:w-[384px] w-full absolute bottom-0">
                <div className="flex flex-col items-center text-center text-2xs font-bold cursor-pointer">
                    <Icon.Home className="mb-2 w-5" />
                    صفحه اصلی
                </div>
                <div className="flex flex-col items-center text-center text-2xs font-bold cursor-pointer text-purple-500">
                    <Icon.Database className="mb-2 w-5" />
                    پزشکان
                </div>
                <div className="flex flex-col items-center text-center text-2xs font-bold cursor-pointer">
                    <Icon.Bookmark className="mb-2 w-5" />
                    فالوآپ
                </div>
                <div className="flex flex-col items-center text-center text-2xs font-bold cursor-pointer">
                    <Icon.User className="mb-2 w-5" />
                    پروفایل
                </div>
            </div>
        </>
    );
};

export default AllDoctors;
