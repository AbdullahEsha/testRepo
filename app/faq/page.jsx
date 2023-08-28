import Faq from "@/components/Faq";
import TopBar from "@/components/TopBar";
import FetchServerSideData from "@/components/DataFetchingComponent/ServerSideDataFetching";

const Page = async () => {
  const url = `${process.env.API_URL}/api/v1/customization/64d9fb77f3a7ce9915b44b6f`;
  const allData = await FetchServerSideData(url);
  const data = allData.data.faq;
  return (
    <>
      <TopBar />
      <div className="my-10 container">
        <h2 className="heading-3 text-center mb-10 text-gray-700">
          FREQUENTLY ASKED QUESTIONS BY CUSTOMERS
        </h2>
        {/* component for data to use useState  */}
        <Faq data={data} />
      </div>
    </>
  );
};

export default Page;
