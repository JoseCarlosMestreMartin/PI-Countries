const getCurrentCountries = ({ page, limit, countries }) => {
  const start = +page === 1 ? 0 : (page - 1) * limit - 1;
  const end = +page === 1 ? limit - 1 : limit * page - 1;
  return countries.slice(start, end);
};

const pagesNumber = (maxPageLimit) => {
  const pagesInit = [];
  for (let i = 1; i <= maxPageLimit; i++) {
    pagesInit.push(i);
  }
  return pagesInit;
};

const movedPage = ({ page, direction, maxPageLimit }) => {
  if (direction === "Prev" && page >= 1) {
    return --page;
  }
  if (direction === "Next" && page <= maxPageLimit) {
    return ++page;
  }
  return page;
};

const optionsContinents = (countries) => {
  let arrayContinents = countries.map((c) => c.continent);
  let continents = [...new Set(arrayContinents)];
  return continents;
};

const filterCountries = ({ countries, continent, activity }) => {
  let filterTotal = countries;

  if (!continent && !activity) {
    filterTotal = countries;
  } else if (continent && !activity) {
    filterTotal = countries?.filter((c) => c.continent === continent);
  } else if (activity && !continent) {
    filterTotal = countries?.filter((c) =>
      c.Activities.map((a) => a.name).includes(activity)
    );
  } else if (continent && activity) {
    const aux = countries?.filter((c) => c.continent === continent);
    filterTotal = aux.filter((c) =>
      c.Activities.map((a) => a.name).includes(activity)
    );
  }

  return filterTotal;
};

const optionsActivities = (countries) => {
  const arrActivities = countries?.map((c) => {
    return c.Activities.map((a) => a.name);
  });
  return [...new Set(arrActivities.flat(Infinity))];
};

const sortCountries = ({ countries, criteria }) => {
  const arrCountries = [...countries];
  const ascendent = (prop) => {
    return (a, b) => {
      return a[prop] > b[prop] ? 1 : -1;
    };
  };
  const descendent = (prop) => {
    return (a, b) => b[prop] - a[prop];
  };

  switch (criteria) {
    case "ascendingByCountry":
        arrCountries.sort(ascendent("name"));
      break;
    case "descendingByCountry":
        arrCountries.sort(descendent("name"));
      break;
    case "ascendingByPopulation":
        arrCountries.sort(ascendent("population"));
      break;
    case "descendingByPopulation":
        arrCountries.sort(descendent("population"));
      break;

    default:
      break;
  }
  return arrCountries;
};

export {
  getCurrentCountries,
  pagesNumber,
  movedPage,
  filterCountries,
  optionsContinents,
  optionsActivities,
  sortCountries,
};
