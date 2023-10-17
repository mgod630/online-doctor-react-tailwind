const DetailsThirdBox = ({ day, hour }) => {
    return (
        <div className="rounded-md font-bold border-purple-700 border-2 bg-white flex flex-col py-3 items-center">
            <p className="text-purple-700 text-sm mb-1">{day}</p>
            <p className="text-slate-800">{hour}</p>
        </div>
    );
};
export default DetailsThirdBox;
