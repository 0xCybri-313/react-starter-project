import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [date, setData] = useState({});

  useEffect(async () => {
    const response = await fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`,
    );
    const parsedData = await response.json();
    setData(parsedData[currency]);
  }, [currency]);
  return date;
}

export default useCurrencyInfo;
