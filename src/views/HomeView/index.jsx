import Link from "next/link";

const HomeView = () => {
  return (
    <>
      <section className="h-100 lg:min-h-[100vh] pt-[20vh] px-[2vw] bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none mb-3">
              Sistem Pakar
            </h1>
            <span className="text-2xl text-violet-400 dark:text-violet-600 mb-2">
              Diagnosis Penyakit pada Tanaman Padi
            </span>
            <span className="text-3xl text-white dark:text-white mb-6">
              di Banjarnegara
            </span>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link
                rel="noopener noreferrer"
                href="/diagnose"
                className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50"
              >
                Diagnosa Sekarang
              </Link>
              <a
                rel="noopener noreferrer"
                href="https://saweria.co/agungpraz31"
                className="px-8 py-3 text-lg font-semibold border rounded border-gray-100 dark:border-gray-800"
                target="_blank"
              >
                Give me a coffee
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="/assets/images/paddy.png"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeView;
