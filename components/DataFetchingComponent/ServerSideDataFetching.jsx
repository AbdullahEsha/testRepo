//server side data fetching
const FetchServerSideData = async (url) => {
  const res = await fetch(url);
  return await res.json();
};

export default FetchServerSideData;
