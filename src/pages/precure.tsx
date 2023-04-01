import { Age, Precure, Series } from "@/gql/graphql";
import { GetStaticProps } from "next";
import { useQuery, gql, DocumentNode } from "@apollo/client";
import Link from "next/link";
import { useState, useEffect, useRef, ReactNode } from "react";
import RadioButton from "@/components/RadioButton";
import Hero from "@/components/Hero";
import "flatpickr/dist/flatpickr.min.css";
import { Japanese } from "flatpickr/dist/l10n/ja.js";
import Flatpickr from "react-flatpickr";
import { gsap } from "gsap";
import { GetWindowSize } from "@/components/hooks/GetWindowSize";
import Loading from "@/components/Loading";
import { usePrecure } from "@/components/hooks/PrecureProvider";
import PrecureLayout from "@/components/PrecureLayout";
import client from "@/lib/apollo-client";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const QUERY: DocumentNode = gql`
  query Precure($color: Color, $after: String, $before: String, $age: Age, $series_id: String) {
    precureAllStars(color: $color, after: $after, before: $before, age: $age, series_id: $series_id) {
      id
      cure_name
      series
    }
  }
`;
const PrecurePage = ({ series }: { series: [{ id: Series["id"]; title: Series["title"] }] }) => {
  const { color, setColor, before, setBefore, after, setAfter, seriesId, setSeriesId, enquiry, setEnquiry } = usePrecure();
  const { windowSize, breakPoint } = GetWindowSize();
  const imgWidth = windowSize.width <= breakPoint ? "10rem" : "300px";
  const imgHeight = windowSize.width >= breakPoint ? "210px" : "400px";
  const div = useRef<HTMLDivElement>(null); //Animation発火用のref
  const option = {
    locale: Japanese,
    dateFormat: "Y/m/d",
    maxDate: new Date(),
  };

  //GraphQL用変数の条件分岐
  let variables = {};
  if (enquiry === "series" && seriesId && seriesId !== "all") {
    variables = { series_id: seriesId };
  } else if (enquiry === "color" && color && color !== "color") {
    variables = { color: color };
  } else if (enquiry === "after" && after) {
    variables = { after: after };
  } else if (enquiry === "before" && before) {
    variables = { before: before };
  }

  const { data, loading, error } = useQuery(QUERY, { variables: variables });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    setAnimation();
  }, [loading]);

  const setAnimation = () => {
    gsap.fromTo(
      "#precure",
      { opacity: 0, y: 10 },
      {
        //toの設定
        opacity: 1,
        y: 0,
        duration: 4,
        ScrollTrigger: {
          trigger: "#top",
          start: "top center",
          end: "bottom center",
        },
      }
    );
  };

  if (error) {
    console.error(error);
    return (
      <>
        <Hero>プリキュアを検索</Hero>
        <p>ごめんなさい、うまく読み込みができませんでした。</p>
      </>
    );
  }
  return (
    <>
      <Hero>プリキュアを検索</Hero>
      <div id="top" className="my-8">
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
          <select
            className="select w-3/4"
            onChange={(e) => {
              setSeriesId(e.target.value);
            }}
            value={seriesId}
          >
            <option value="all">シリーズを選んでください</option>
            {series.map((item: { id: Series["id"]; title: Series["title"] }) => (
              <option key={item["id"]} value={item["id"]}>
                {item["title"]}
              </option>
            ))}
          </select>
        )}
        {enquiry === "color" && (
          <select className="select w-1/3 md:w-1/5" onChange={(e) => setColor(e.target.value)} value={color}>
            <option value="all">カラーを選択してください</option>
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
              value={after}
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
              value={before}
              onChange={([date]) => {
                setBefore(date);
              }}
            />
            <span>以前に初変身</span>
          </div>
        )}

        {loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-2 my-4 md:grid-cols-4 justify-items-center gap-3">
            {data.precureAllStars.map((value: Precure) => (
              <Link href={`/precure/${value["id"]}`} key={value["id"]} className="touch-animation">
                <div ref={div} id="precure">
                  <img
                    className="w-40 md:w-[300px] rounded-lg mx-auto"
                    loading="lazy"
                    width={imgWidth}
                    height={imgHeight}
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/precure/${value["cure_name"]}.webp`}
                    alt={`${value["cure_name"]}`}
                  />
                  <h2 className="mt-1 font-bold text-xs md:text-lg">{value["cure_name"]}</h2>
                  <h3 className="text-xs md:text-base">{value["series"]}</h3>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query series {
        seriesAll {
          title
          id
        }
      }
    `,
  });
  return {
    props: {
      series: data.seriesAll,
    },
  };
};
export default PrecurePage;
PrecurePage.getLayout = (page: ReactNode) => <PrecureLayout>{page}</PrecureLayout>;
