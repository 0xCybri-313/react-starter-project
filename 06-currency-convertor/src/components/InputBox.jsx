import React from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  return (
    <div className={`flex rounded-lg bg-white p-3 text-sm ${className}`}>
      <div className="w-1/2">
        <label className="mb-2 inline-block text-black/40">{label}</label>
        <input
          className="w-full bg-transparent py-1.5 outline-none"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="flex w-1/2 flex-wrap justify-end text-right">
        <p className="mb-2 w-full text-black/40">Currency Type</p>
        <select
          className="cursor-pointer rounded-lg bg-gray-100 px-1 py-1 outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
