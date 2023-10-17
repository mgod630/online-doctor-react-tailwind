import { Link } from "react-router-dom";
import Image from "../Image";
import { useParams } from "react-router-dom";
import * as Icon from "react-feather";
import DetailsFirstBox from "./DetailsFirstBox";
import DetailsSecondBox from "./DetailsSecondBox";
import DetailsThirdBox from "./DetailsThirdBox";
import LesserThanIcon from "../LesserThanIcon";

const Details = () => {
    const params = useParams();
    const localData = JSON.parse(localStorage.getItem("data"));
    const selectedDoctor = localData.filter(
        (doc) => doc.email === params.email
    )[0];
    return (
        <div className="bg-blue-100 flex flex-col">
            <div className="bg-white flex justify-between rounded-b-md items-center py-3 px-3">
                <Link to="/">
                    <LesserThanIcon className="hover:font-bold" />
                </Link>
                <p className="font-semibold">پروفایل پزشک</p>
            </div>
            <div className="h-[81vh] overflow-auto px-3 pt-3 pb-5">
                <div className="flex items-center justify-end">
                    <div className="font-semibold">
                        <p className="text-sm mb-1">
                            {selectedDoctor.name.first +
                                " " +
                                selectedDoctor.name.last}
                        </p>
                        <p className="text-xs text-slate-600">
                            {selectedDoctor.email}
                        </p>
                    </div>
                    <Image
                        className="w-12 h-12"
                        src={selectedDoctor.picture.thumbnail}
                        alt={
                            selectedDoctor.name.first +
                            " " +
                            selectedDoctor.name.last
                        }
                    />
                </div>
                <div className="grid grid-cols-3 gap-4 justify-between mt-5">
                    <DetailsFirstBox
                        firstParagraph={selectedDoctor.dob.age / 10}
                        secondParagraph="رای مراجعین"
                    >
                        <Icon.Star className="text-yellow-500 px-1 py-2 rounded-b-md bg-yellow-100 w-9 h-9" />
                    </DetailsFirstBox>
                    <DetailsFirstBox
                        firstParagraph={selectedDoctor.location.street.number}
                        secondParagraph="شماره نظام"
                    >
                        <Icon.File className="text-red-500 px-1 py-2 rounded-b-md bg-red-100 w-9 h-9" />
                    </DetailsFirstBox>
                    <DetailsFirstBox
                        firstParagraph={`${selectedDoctor.registered.age} سال`}
                        secondParagraph="سابقه طبابت"
                    >
                        <Icon.Check className="text-green-500 px-1 py-2 rounded-b-md bg-green-100 w-9 h-9" />
                    </DetailsFirstBox>
                </div>
                <DetailsSecondBox text="درباره پزشک" />
                <DetailsSecondBox text="تحصیلات" />
                <DetailsSecondBox text="تجربیات و دستاوردها" />
                <p className="mt-5 text-sm font-semibold">
                    ساعات کاری و جلسات پزشک
                </p>
                <div
                    style={{ direction: "rtl" }}
                    className="grid grid-cols-3 gap-3 mt-5 text-sm"
                >
                    <DetailsThirdBox day="شنبه" hour="8 تا 17" />
                    <DetailsThirdBox day="یکشنبه" hour="8 تا 20" />
                    <DetailsThirdBox day="دوشنبه" hour="12 تا 18" />
                    <DetailsThirdBox day="سه شنبه" hour="8 تا 17" />
                    <DetailsThirdBox day="چهارشنبه" hour="8 تا 13" />
                </div>
            </div>
            <div className="flex justify-between sm:w-[384px] w-full absolute bottom-0 mb-2 px-3">
                <button className="py-3 rounded-md text-center text-sm font-bold w-full bg-slate-400 text-slate-200 hover:cursor-not-allowed">
                    دریافت و ثبت نوبت
                </button>
                {/* <Link
                    to="/"
                    className="py-3 mt-5 rounded-md text-center text-sm font-semibold w-5/12 bg-blue-500 duration-300 text-slate-200 hover:bg-blue-700"
                >
                    بازگشت
                </Link> */}
            </div>
        </div>
    );
};
export default Details;
