import client from "@/lib/apollo-client";
import { gql } from "@apollo/client";
import Link from "next/link";
export default function Precure({ precure }: { precure: any }) {
  return (
    <>
      <h2 className="text-main font-bold my-2 mx-2 text-lg">プリキュアを検索</h2>
      <div>
        <form action="">
          <div className="mb-6 mx-4">
            <input
              type="text"
              id="word"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </form>
        <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center gap-3">
          {precure.map((value: any) => (
            <Link href={`/precure/${value["id"]}`} key={value["id"]}>
              <img
                className="w-40 md:w-[300px] rounded-md"
                src={`${process.env.IMAGE_URL}/${value["cure_name"]}.webp`}
                alt={`${value["cure_name"]}`}
              />
              <h2 className="mt-1 font-bold text-xs md:text-lg">{value["cure_name"]}</h2>
              <h3 className="text-xs md:text-base">{value["series"]}</h3>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await client.query({
    query: gql`
      query AllStars {
        precureAllStars {
          id
          cure_name
          series
        }
      }
    `,
  });
  return {
    props: {
      precure: data.data.precureAllStars,
    },
  };
}
