import { Link } from "react-router-dom";

export default function Search({ search, term, setSearch }) {
  return (
    <>
      <div className="bg-gray-300 dark:bg-gray-700 dark:text-white shadow-gray-500 shadow-xl fixed top-22 right-16 p-5 md:right-130 md:min-w-100 rounded-xl min-w-80">
        <p>resut for {term}</p>
        <div>
          {search.map((s) => {
            return (
              <>
                <Link
                  to={`profile/${s.id}`}
                  onClick={() => {
                    setSearch(false);
                  }}
                >
                  <div className="bg-white dark:bg-gray-400 rounded-xl min-w-50 flex flex-row gap-2 p-1 mt-2">
                    <div
                      className=" rounded-full overflow-hidden w-10 h-10  hover:scale-105 active:scale-95 transition-all"
                      title="Account"
                    >
                      <img
                        src={s?.profile}
                        alt=""
                        className="object-cover w-full h-full cursor-pointer"
                      />
                    </div>
                    <p>{s.username}</p>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
