import { gql } from "@apollo/client";
import { Precure } from "@/gql/graphql";
import dayjs from "dayjs";
import client from "@/lib/apollo-client";
import { GetStaticPaths, GetStaticProps } from "next";
import Hero from "@/components/Hero";
import Head from "next/head";
import { ReactNode } from "react";
import PrecureLayout from "@/components/PrecureLayout";

const Character = ({ precure }: { precure: Precure }) => {
  return (
    <div>
      <Head>
        <title>{precure["cure_name"]} | プリキュアデータベース</title>
        <meta property="og:url" content="https://precure-database.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${precure["cure_name"]}|プリキュアデータベース`} />
        <meta property="og:site_name" content="プリキュアデータベース" />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_IMAGE_URL}/precure/${precure["cure_name"]}.webp`} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mu_tomoya" />
        <meta name="twitter:image" content="https://precure-database.vercel.app/ogp.png" />
      </Head>
      <Hero>キャラクター</Hero>
      <div className="mx-4 my-8">
        <img
          className="max-w-xs md:max-w-md mt-8 object-cover mx-auto rounded-3xl"
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/precure/${precure["cure_name"]}.webp`}
          alt={precure["cure_name"]}
        />
        <div className="my-8">
          <h1 className={`text-xl font-bold md:text-4xl my-2 text-center md:my-8 name-${precure["color"]}`}>
            {precure["cure_name"]}/{precure["name"]}
          </h1>
          <p className="md:w-3/5 mx-auto leading-loose text-lg">{precure["description"]}</p>
        </div>
        <dl>
          <dt>
            <span className="tag">シリーズ</span>
          </dt>
          <dd>{precure["series"]}</dd>
          {precure["birthday"] ? (
            <>
              <dt>
                <span className="tag">誕生日</span>
              </dt>
              <dd>
                {precure["birthday"]?.replace("/", "月")}日 {precure["age"] ? `(${precure["age"]}歳)` : ""}
              </dd>
            </>
          ) : (
            ""
          )}
          <dt>
            <span className="tag">変身セリフ</span>
          </dt>
          <dd>
            <p>「{precure["before_prologue"]}</p>
            <p>{precure["after_prologue"]}」</p>
          </dd>
          <dt>
            <span className="tag">変身アイテム</span>
          </dt>
          <dd>{precure["item"]}</dd>
          <dt>
            <span className="tag">CV.</span>
          </dt>
          <dd>
            {precure["voice"]} ({dayjs(precure["voice_birthday"]).format("M月D日生まれ")})
          </dd>
          <dt>
            <span className="tag">パートナー妖精</span>
          </dt>
          {precure["fairy"]?.map((fairy, i) => (
            <dd key={i}>{fairy}</dd>
          ))}
          <dt>
            <span className="font-bold text-lg md:text-2xl">必殺技</span>
          </dt>
          <dt>
            <span className="tag">個人技</span>
          </dt>
          <dd>
            <ul>
              {precure["special"]?.solo.map((solo, i) => (
                <li className={`special special-${precure["color"]}`} key={i}>
                  {solo}
                </li>
              ))}
            </ul>
          </dd>
          <dt>
            <span className="tag">チーム技</span>
          </dt>
          <dd>
            <ul>
              {precure["special"]?.team.map((team, i) => (
                <li className={`special special-${precure["color"]}`} key={i}>
                  {team}
                </li>
              ))}
            </ul>
          </dd>
        </dl>
        <div className="mx-auto md:w-3/5">
          <h2 className={`text-xl md:text-2xl font-bold my-4  text-${precure["color"]}`}>変身シーン</h2>
          <div className="youtube my-2">
            <iframe
              src={`https://www.youtube.com/embed/${precure["youtube_id"]}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query precureIds {
        precureAllStars {
          id
        }
      }
    `,
  });
  const paths = data.precureAllStars.map((val: { id: string }) => ({
    params: {
      id: val.id,
    },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await client.query({
    query: gql`
      query PrecureQuery($id: String) {
        precure(id: $id) {
          after_prologue
          age
          before_prologue
          birthday
          color
          cure_name
          debut
          fairy
          id
          item
          name
          series
          series_id
          special {
            solo
            team
          }
          voice
          voice_birthday
          youtube_id
          description
        }
      }
    `,
    variables: { id: params?.id },
  });
  return {
    props: {
      precure: data.precure,
    },
  };
};

export default Character;
Character.getLayout = (page: ReactNode) => <PrecureLayout>{page}</PrecureLayout>;
