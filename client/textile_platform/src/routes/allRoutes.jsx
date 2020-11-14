
const toHomePage = (history) => {
    history.push("/")
}

const toMarketPage = (history) => {
    history.push("/getOffers");
}

const toAboutPage = (history) => {
    history.push("/about");
}

const toAddOfferPage = (history) => {
    history.push("/addOffer")
}



export default {toHomePage, toMarketPage, toAboutPage, toAddOfferPage}