import { Link } from "react-router-dom";
import Image from "../Image";
import { useParams } from "react-router-dom";
import * as Icon from "react-feather";
import DetailsFirstBox from "./DetailsFirstBox";
import DetailsSecondBox from "./DetailsSecondBox";
import DetailsThirdBox from "./DetailsThirdBox";

const Details = () => {
    const params = useParams();
    const localData = JSON.parse(localStorage.getItem("data"));
    const selectedDoctor = localData.filter(
        (doc) => doc.email === params.email
    )[0];
    console.log(selectedDoctor);
    return (
        <div className="bg-blue-200 flex flex-col">
            <div className="flex items-center justify-end">
                <div>
                    <p>
                        {selectedDoctor.name.first +
                            " " +
                            selectedDoctor.name.last}
                    </p>
                    <p className="text-sm">{selectedDoctor.email}</p>
                </div>
                <Image
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
                    secondParagraph="clients score"
                >
                    <Icon.Star className="text-yellow-500 p-1 rounded-b-md bg-yellow-100" />
                </DetailsFirstBox>
                <DetailsFirstBox
                    firstParagraph={selectedDoctor.location.street.number}
                    secondParagraph="number"
                >
                    <Icon.File className="text-red-500 p-1 rounded-b-md bg-red-100" />
                </DetailsFirstBox>
                <DetailsFirstBox
                    firstParagraph={`${selectedDoctor.registered.age} years`}
                    secondParagraph="experience"
                >
                    <Icon.Check className="text-green-500 p-1 rounded-b-md bg-green-100" />
                </DetailsFirstBox>
            </div>
            <DetailsSecondBox text="درباره پزشک" />
            <DetailsSecondBox text="تحصیلات" />
            <DetailsSecondBox text="تجربیات و دستاوردها" />
            <p className="mt-5 text-md font-semibold">
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
            <Link
                to="/"
                className="py-3 mt-5 rounded-md text-center text-sm font-semibold bg-blue-500 text-white hover:bg-blue-700 duration-300"
            >
                بازگشت
            </Link>
        </div>
    );
};
export default Details;
