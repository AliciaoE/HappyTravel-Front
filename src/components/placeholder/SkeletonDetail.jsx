export default function SkeletonDetails() {
  return (
    <div
      role="status"
      className="w-[100%] mx-auto  absolute top-0 left-0 right-0 lg:static lg:max-w-[65%] lg:mt-[6rem] lg:w-full lg:gap-[2.5rem] lg:flex"
    >
      <div className=" w-full h-[20rem] mb-[1rem] p-4  rounded-b-3xl  md:p-6 bg-[#b9b9b9] lg:w-[50%] lg:h-[28rem] lg:rounded-3xl lg:flex lg:justify-center lg:items-center">
        <div className="animate-pulse flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
          <svg
            className="w-20 h-20 text-gray-200 dark:text-gray-400 lg:w-[10rem] lg:h-[10rem]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
          </svg>
        </div>
        <div className="h-[6rem] w-[80%] bg-[#999999] rounded-2xl mx-auto mt-[2rem]  lg:hidden"></div>
      </div>
      <div className="lg:w-[50%] animate-pulse">
        <div className="h-2 w-[90%] bg-gray-200 rounded-full dark:bg-gray-700 bg-[#999999] mx-auto mt-[3rem] mb-3 lg:w-[60%] lg:h-[1rem] lg:mx-0"></div>
        <div className="h-2 bg-[#999999] rounded-full  w-[90%] mb-3 mx-auto lg:w-[40%] lg:h-3 lg:mb-[2rem] lg:mx-0"></div>
        <div className="h-2 w-[90%] bg-gray-200 rounded-full dark:bg-gray-700 bg-[#999999] mx-auto mb-3 lg:h-[0.6rem] lg:mx-0"></div>
        <div className="h-2 bg-[#999999] rounded-full  w-[90%] mb-3 mx-auto lg:h-[0.6rem] lg:mx-0"></div>
        <div className="h-2 w-[90%] bg-gray-200 rounded-full dark:bg-gray-700 bg-[#999999] mx-auto mb-3 lg:h-[0.6rem] lg:mx-0"></div>
        <div className="h-2 bg-[#999999] rounded-full  w-[90%] mb-3 mx-auto lg:h-[0.6rem] lg:mx-0"></div>
        <div className="h-2 w-[90%] bg-gray-200 rounded-full dark:bg-gray-700 bg-[#999999] mx-auto mb-3 lg:h-[0.6rem] lg:mx-0"></div>
        <div className="h-2 bg-[#999999] rounded-full  w-[90%] mb-3 mx-auto lg:h-[0.6rem] lg:mx-0"></div>
        <div className="h-2 w-[90%] bg-gray-200 rounded-full dark:bg-gray-700 bg-[#999999] mx-auto mb-3 lg:h-[0.6rem] lg:mx-0"></div>
        <div className="h-2 bg-[#999999] rounded-full  w-[90%] mb-3 mx-auto lg:h-[0.6rem] lg:mx-0"></div>
        <div className="h-2 w-[90%] bg-gray-200 rounded-full dark:bg-gray-700 bg-[#999999] mx-auto mb-3 lg:h-[0.6rem] lg:mx-0"></div>
      </div>
    </div>
  );
}
