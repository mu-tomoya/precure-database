import { useRouter } from "next/router";
import { DocumentNode, gql, useQuery } from "@apollo/client";
import { Precure, Special } from "@/gql/graphql";
import dayjs from "dayjs";

export default function Character() {
  const router = useRouter();
  const { id } = router.query;
  const QUERY: DocumentNode = gql`
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
      }
    }
  `;
  const { data, loading, error } = useQuery(QUERY, { variables: { id: id } });
  if (loading) return null;
  if (error) {
    console.error(error);
    return null;
  }
  const precure: Precure = data.precure;
  return (
    <>
      <img
        className="max-w-xs mx-auto rounded-md"
        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/precure/${precure["cure_name"]}.webp`}
        alt={precure["cure_name"]}
      />
      <h1 className={`text-xl font-bold text-center my-4 name-${precure["color"]}`}>
        {precure["cure_name"]}/{precure["name"]}
      </h1>
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
          <span className="font-bold text-lg">必殺技</span>
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
      <div className="mx-2">
        <h2 className={`text-xl font-bold my-4  text-${precure["color"]}`}>変身シーン</h2>
        <div className="youtube my-2">
          <iframe
            src={`https://www.youtube.com/embed/${precure["youtube_id"]}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </>
  );
}
