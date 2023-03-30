import { Age, Color, Precure, Series } from "@/gql/graphql";
import { useQuery, gql, DocumentNode } from "@apollo/client";
import Link from "next/link";
import { useState, useEffect } from "react";
import RadioButton from "@/components/RadioButton";
import Hero from "@/components/Hero";
import "flatpickr/dist/flatpickr.min.css";
import { Japanese } from "flatpickr/dist/l10n/ja.js";
import Flatpickr from "react-flatpickr";

const QUERY: DocumentNode = gql`
  query Precure($color: Color, $after: String, $before: String, $age: Age, $series_id: String) {
    precureAllStars(color: $color, after: $after, before: $before, age: $age, series_id: $series_id) {
      id
      cure_name
      series
    }
    seriesAll {
      title
      id
    }
  }
`;

export default function PrecurePage(): JSX.Element | null {
  const [color, setColor] = useState<string>();
  const [after, setAfter] = useState<Date>();
  const [before, setBefore] = useState<Date>();
  const [age, setAge] = useState<Age>();
  const [seriesId, setSeriesId] = useState("");
  const [enquiry, setEnquiry] = useState("");
  const [array, setArray] = useState([]);
  const option = {
    locale: Japanese,
    dateFormat: "Y/m/d",

    maxDate: new Date(),
  };
  let variables = {};
  if (enquiry === "series" && seriesId) {
    variables = { series_id: seriesId };
  } else if (enquiry === "color" && color) {
    variables = { color: color };
  } else if (enquiry === "after" && after) {
    variables = { after: after };
  } else if (enquiry === "before" && before) {
    variables = { before: before };
  }
  const { data, loading, error } = useQuery(QUERY, { variables: variables });
  useEffect(() => {
    if (!loading) {
      setArray(data.seriesAll);
    }
  }, [loading]);
  if (error) {
    console.error(error);
    return null;
  }
  return (
    <>
      <Hero>プリキュアを検索</Hero>
      <div className="my-8">
        <ul className="grid grid-cols-4 my-3 mx-1">
          <li>
            <RadioButton str="シリーズ" value="series" name="precure" setValue={setEnquiry} />
          </li>
          <li>
            <RadioButton str="色" value="color" name="precure" setValue={setEnquiry} />
          </li>
          <li>
            <RadioButton str="以降" value="after" name="precure" setValue={setEnquiry} />
          </li>
          <li>
            <RadioButton str="以前" value="before" name="precure" setValue={setEnquiry} />
          </li>
        </ul>
        {enquiry === "series" && (
          <select className="select w-3/4" onChange={(e) => setSeriesId(e.target.value)}>
            {array.map((item: Series) => (
              <option key={item["id"]} value={item["id"]}>
                {item["title"]}
              </option>
            ))}
          </select>
        )}
        {enquiry === "color" && (
          <select className="select w-1/3 md:w-1/5" onChange={(e) => setColor(e.target.value)}>
            <option value="black">黒</option>
            <option value="white">白</option>
            <option value="pink">ピンク</option>
            <option value="blue">青</option>
            <option value="yellow">黄</option>
            <option value="purple">紫</option>
            <option value="green">緑</option>
            <option value="gold">金</option>
          </select>
        )}
        {enquiry === "after" && (
          <div className="w-2/3 md:w-1/4 mx-auto">
            <Flatpickr
              options={option}
              className="bg-white border border-gray-300 inline-block w-full p-2.5 shadow;"
              onChange={([date]) => {
                setAfter(date);
              }}
            />
            <span>以降に初変身</span>
          </div>
        )}
        {enquiry === "before" && (
          <div className="w-2/3 md:w-1/4 mx-auto">
            <Flatpickr
              options={option}
              className="bg-white border border-gray-300 inline-block w-full p-2.5 shadow;"
              onChange={([date]) => {
                setBefore(date);
              }}
            />
            <span>以前に初変身</span>
          </div>
        )}
        {loading ? null : (
          <div className="grid grid-cols-2 my-4 md:grid-cols-4 justify-items-center gap-3">
            {data.precureAllStars.map((value: Precure) => (
              <Link href={`/precure/${value["id"]}`} key={value["id"]}>
                <img
                  className="w-40 md:w-[300px] rounded-md"
                  loading="lazy"
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/precure/${value["cure_name"]}.webp`}
                  alt={`${value["cure_name"]}`}
                />
                <h2 className="mt-1 font-bold text-xs md:text-lg">{value["cure_name"]}</h2>
                <h3 className="text-xs md:text-base">{value["series"]}</h3>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
