import LesserThanIcon from "../LesserThanIcon";

const DetailsSecondBox = ({ text }) => {
    return (
        <div className="flex justify-between items-center bg-white cursor-pointer hover:scale-105 duration-300 rounded-md py-2 px-3 mt-4">
            <LesserThanIcon />
            <p className="text-sm font-medium text-slate-600">{text}</p>
        </div>
    );
};
export default DetailsSecondBox;
