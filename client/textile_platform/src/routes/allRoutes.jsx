const toLoginPage = (history) => {
  history.push("/");
};

const toHomePage = (history) => {
  history.push("/home");
};

const toMarketPage = (history) => {
  history.push("/getOffers");
};

const toNewsPage = (history) => {
  history.push("/news");
};

const toAboutPage = (history) => {
  history.push("/about");
};

const toAddOfferPage = (history) => {
  history.push("/addOffer");
};

export default {
  toLoginPage,
  toHomePage,
  toMarketPage,
  toNewsPage,
  toAboutPage,
  toAddOfferPage,
};
