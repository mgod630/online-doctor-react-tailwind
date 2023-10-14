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
        <div>
            <div>
                <p className="mb-3 font-semibold">لیست پزشکان</p>
            </div>
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
    );
};

export default AllDoctors;
