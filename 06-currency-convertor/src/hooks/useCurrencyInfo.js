// import { useEffect, useState } from "react";

// export function useCurrencyInfo(currency) {
//   const [date, setData] = useState({});

//   useEffect(async () => {
//     const response = await fetch(
//       `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`,
//     );
//     const parsedData = await response.json();
//     setData(parsedData[currency]);
//   }, [currency]);
//   return date;
// }

import { useEffect, useState } from "react";

export function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`,
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);
  console.log(data);

  return data;
}

// export default useCurrencyInfo;
