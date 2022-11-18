export const capitalize = (text) => {
    const [firstSymbol = '', ...restSymbols] = text;
    return `${firstSymbol}${restSymbols.join('')}`;
  };
