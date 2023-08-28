import FetchServerSideData from "../DataFetchingComponent/ServerSideDataFetching";
import RightCarosel from "../homepage/carosel/leftCarosel/rightCarosel/RightCarosel";

const TinySlider = async () => {
  const url = `${process.env.API_URL}/api/v1/customization/64d9fb77f3a7ce9915b44b6f`;
  const allData = await FetchServerSideData(url);
  const data = allData.data.heroRightSlider;
  // console.log("left", data);
  return <RightCarosel data={data} />;
};

export default TinySlider;
