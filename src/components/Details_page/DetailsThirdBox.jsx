const DetailsThirdBox = ({ day, hour }) => {
    return (
        <div className="rounded-md border-purple-500 border-2 bg-white flex flex-col py-3 items-center">
            <p className="text-purple-500 font-bold">{day}</p>
            <p>{hour}</p>
        </div>
    );
};
export default DetailsThirdBox;
