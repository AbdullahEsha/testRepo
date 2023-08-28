const { useState, useMemo, useEffect, useCallback } = require("react");

const ClientSideDataFetching = (url) => {
  //client side data fetching using useCallback to fix data rerendering issue
  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    const response = await axios.get(url);
    setData(response);
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData]);

  return data;
};

export default ClientSideDataFetching;
