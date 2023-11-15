import React, { useState } from "react";
import Search from "../Search/Search";
import "./Currencies.css";
import listOfCurrencies from "./list.json";

const Currencies = () => {
  // eslint-disable-next-line
  const [currencies, setCurrencies] = useState(listOfCurrencies);
  const [lastLength, setLastLength] = useState(0);

  // on each keypress, check items for match via search

  // eslint-disable-next-line
  const handleSearchKeyDown = () => {
    let keyword = document.querySelector("#search").value;
    let keywordShortened = keyword.slice(0, keyword.length);

    // empty search field resets currencies to original state
    if (keyword.length === 0 || keyword.length === null) {
      // EMPTY SEARCH FIELD
      setCurrencies(listOfCurrencies);
      return;
    }

    // if search length is less than last length, reset currencies to original state then searches again for correct results
    if (keyword.length < lastLength) {
      // "LESS THAN LAST LENGTH
      setCurrencies(currencies);
      keyword = document.querySelector("#search").value;
      keywordShortened = keyword.slice(0, keyword.length);

      const research = listOfCurrencies.filter((currency) => currency.currency.toLowerCase().match(keywordShortened.toLowerCase()));
      setCurrencies(research);

      // if typing is longer than last length, search for correct results
    } else {
      // UPWARDS SEARCH
      const currenciesearch = listOfCurrencies.filter((currency) => currency.currency.toLowerCase().match(keywordShortened.toLowerCase()));

      setCurrencies(currenciesearch);
    }

    // set last length to current length
    setLastLength(keyword.length);
    return null;
  };

  return (
    <>
      <Search handleSearchKeyDown={handleSearchKeyDown} />
      <div className='currencies'>
        {currencies.map((item) => {
          return (
            <a className='currency' key={item.currency} currency={item.currency} href={"/price/" + item.currency}>
              <span>{item.currency}</span>:<br />
              {item.country}
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Currencies;
