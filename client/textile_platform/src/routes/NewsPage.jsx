import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import routes from "./allRoutes";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core/";
import "../styles/newsPage.css";
import imageNews1 from "../images/news1.png";
import imageNews2 from "../images/news2.JPG";
import imageNews3 from "../images/news3.png";

function NewsPage(props) {
  return (
    <div>
      <div className="news-top">
        <HeaderComponent
          getHomePage={() => routes.toHomePage(props.history)}
          getMarketPage={() => routes.toMarketPage(props.history)}
          getNewsPage={() => routes.toNewsPage(props.history)}
          getAboutPage={() => routes.toAboutPage(props.history)}
        ></HeaderComponent>

        <Grid container>
          <Grid item xs={7}></Grid>
          <Grid item xs={3}>
            <div style={{ marginBottom: "50px" }}>
              <h3>NEWS</h3>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className="all-news">
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <div className="news-section">
              <h2 className="dates">15.12.2020</h2>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>
                    Innovative closed-loop recycling technologies
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <p className="news-text">
                      Current textile recycling technologies represent mostly
                      the solutions for open-loop recycling, especially in terms
                      of recycling post-consumer waste. In relation to fashion
                      industry, it means that the collected garments are
                      recycled, but the quality of recycled material is not
                      sufficient to produce new garments (Adelphi, 2019).
                      Closed-loop textile-to-textile recycling processes have
                      been still in research and development phase or have not
                      reached commercial stage or been upscaled yet. However,
                      various innovative recycling technologies have been
                      developed for both synthetic as well as natural fibres.
                      These are presented below.
                    </p>
                    <p className="news-text">
                      <h5>Worn Again recycling technology </h5>
                      Worn Again developed an innovative chemical polymer
                      recycling approach for synthetic as well as natural fibres
                      (namely polyester and cotton). The first step in the
                      process is the separation and recapturing of polyester and
                      cotton. It is followed by different processing steps
                      depending on the fibre type. Polyester is dissolved, all
                      the additional contaminants are extracted, and a resin is
                      produced. The resin is then converted into polyester
                      fibre, with quality equivalent to virgin fibre. The
                      innovative aspect of the process is that polyester is not
                      depolymerized into monomers but recaptured directly, what
                      results in energy savings as compared to other recycling
                      technologies (Adelphi, 2019). In the case of cotton, it is
                      dissolved, followed by extraction of the dyes and
                      contaminants. Then a pulp is produced, equivalent to
                      viscose. Currently, the technology can filter out 20% out
                      of impurities. The advantage is that broad range of input
                      is possible, as blends and mono-materials can be used
                      (Greenblue 2017). The process is currently expensive, but
                      the goal is to compete with virgin material in terms of
                      price. The company is working together with brands and
                      retailers such as H&M and Puma.
                    </p>
                    <div>
                      <img src={imageNews1} className="news-image" alt="" />
                    </div>
                    <p className="news-text">
                      <h5>
                        H&M and the Hong Kong Research Institute of Textiles and
                        Apparel (HKRITA)
                      </h5>
                      This technology enables recycling cotton and polyester
                      blends into new fabric and yarns. It is possible by means
                      of chemical and hydrothermal treatment under pressure (H&M
                      Foundation). A biodegradable green chemical is utilized
                      but energy consumption is quite high due to generated heat
                      and pressure. The process is relatively well developed and
                      currently applied in a pre-industrialised plant opened in
                      Hong Kong in September 2018. However, currently cotton
                      which is processed to cellulose powders is not used for
                      new garments in a closed loop, but for functional products
                      like high-absorbency materials.
                    </p>

                    <p className="news-text">
                      <h5>
                        Infinited Fiber Company (Relooping Fashion Initiative){" "}
                      </h5>
                      This technology was developed by the VTT Technical
                      Research Center of Finland and the Infinited Fiber
                      Company. Their recycling process that can turn cotton
                      textile waste, as well as paper and cardboard waste into
                      new, cotton-like fibers for the textile industry. The
                      “infinited fiber”, as the name suggest the fibre can be
                      recycled theoretically infinitely, without decreasing the
                      quality of the fiber. Currently testing on industrial
                      scale takes place to develop large-scale industrial
                      production (The Infinited Fiber Company 2018).
                    </p>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="news-section">
              <h2 className="dates">03.12.2020</h2>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Innovative sorting technologies</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <p className="news-text">
                      In general, recycling technology processes require a
                      relatively high grade of purity of input materials.
                      Therefore, the need for innovative and efficient textile
                      sorting technology is increasing in importance. Currently
                      there are least two advanced European projects aimed at
                      developing textile sorting technologies. These are
                      described below.
                    </p>

                    <p className="news-text">
                      <h5>Fibersort</h5>
                      It is a technology developed by Valvan Baling System, that
                      allows automatic sorting of large volumes of mixed
                      post-consumer textiles by fibre type. As result, high
                      value textile can be supplied to textile recyclers
                      enabling them to provide a better-quality recycled output.
                      The scanning technology uses NIR Spectroscopy, which is a
                      technology based on molecular absorptions measured in the
                      Near Infrared part of the spectrum (Adelphi, 2019). The
                      NIR technology for textile sorting by fibre composition is
                      similar to the one developed by NIR sorting of different
                      types of plastic polymers. As this technology allowed to
                      have more clean streams and higher value recycling in the
                      plastic industry, it is expected to obtain similar results
                      by implementing the same approach in the clothing
                      industry.
                    </p>
                    <div>
                      <img src={imageNews2} alt="" className="news-image2" />
                    </div>
                    <p className="news-text">
                      <h5>Textiles4Textiles</h5>
                      Textiles4Textiles (T4T) is another NIRS sorting technology
                      that separates post-consumer clothing and its components.
                      The technology allows to separate used textile material
                      according to fibre composition and colour. In case of
                      sorting by colour, there is no need for bleaching or
                      re-dyeing before the subsequent recycling process. Thus,
                      the use of chemicals can be avoided, what brings obviously
                      environmental benefits. Moreover, these innovative sorting
                      technologies can generate cost savings for the
                      substitution of manual sorting. However the machinery
                      requires high upfront investments as well as large volumes
                      of textiles in order to be cost effective (Norden 2015).
                    </p>
                    <p className="news-text">
                      Bibliography Adelphi. (2019, January 2017). Circular
                      Economy in the Textile Secotr: Study for the German
                      Federal Ministry for Economic Cooperation and Development.
                      Bonn: Federal Ministry for Economic Cooperation and
                      Development. Norden, Nordic Council of Ministers 2017:
                      Stimulating Textile-to-Textile Recycling, Watson, David;
                      Elander, Maria; Gylling, Anja, Andersson, Tova; Heikkilä,
                      Pirjo. Retrieved 28.09.2018 from
                      https://norden.diva-portal.org/smash/get/diva2:1161916/FULLTEXT01.pdf.{" "}
                    </p>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Grid>
        </Grid>

        <div className="news-section">
          <h2 className="dates">25.11.2020</h2>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                Current status and challenges of circular textile industry  
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p className="news-text">
                  It is estimated that the European textile industry generates
                  waste of 16 million tons per year (Pandit, Nadathur, & Jose,
                  2019). Currently, less than 1% of the materials used to
                  produce clothing is recycled into new materials in a
                  closed-loop process. Additionally, in the EU
                  countries about 15-20% of textiles are collected for
                  recycling or re-using purposes, leaving the rest
                  for landfilling or incineration (Adelphi, 2019). Out of the
                  collected textiles, approximately 50% is downcycled and the
                  other 50% is reused, mainly by exporting them to developing
                  countries (Adelphi, 2019).   As far as closed loop
                  recycling of post-consumer waste is concerned, it
                  happens very rarely, because the current state of technology
                  allows mainly open-loop recycling (Ellen Mc Arthur Foundation,
                  2017). This means that the collected textiles are recycled and
                  recovered for other purposes than for producing
                  new garments (Pandit, Nadathur, & Jose, 2019).  Additionally,
                  most textile products are not designed for recycling, mainly
                  in terms of material composition which makes this process
                  costly and not really environmentally friendly. Therefore,
                  they are mainly down-cycled to
                  produce non-woven materials, such as cleaning cloths and
                  filters (Pandit, Nadathur, & Jose, 2019). The graphic below
                  illustrates the difference between open- and closed-loop
                  recycling models.
                </p>
                <div>
                  <img src={imageNews3} alt="" className="news-image" />
                </div>
                <p className="news-text">
                  According to the industry experts, open-loop recycling,
                  including downcycling, is not a right direction for the
                  long-term success in terms of transition towards circular
                  economy. (Pandit, Nadathur, & Jose, 2019). Therefore, to
                  produce the recycled materials, which is aimed for
                  garments, almost exclusively the
                  mono-fibre pre-consumer-waste is used (Adelphi, 2019).  This
                  type of waste requires less complex technologies for a
                  closed-loop recycling (Adelphi, 2019).    According
                  to Bertolani, currently the only way for the textile
                  brands to facilitate the recyclability of their products is
                  to choose the mono-material composition, however
                  this choice can significantly limit the design
                  possibilities and
                  performance of the final products (2017). Additionally, to
                  create the textile product made of 100% mono-materials, the
                  trims such as buttons, zippers, tapes and other finishing
                  products have to be integrated (Bertolani, 2017). For small
                  and medium companies with lower MOQs it poses a great
                  challenge in terms of time and money (Bertolani, 2017).   The
                  development of innovative sorting systems could help companies
                  to overcome challenges mentioned above.
                </p>
                <p className="news-text">
                  <h5>Bibliography</h5>
                  Adelphi. (2019, January 2017). Circular Economy in the Textile
                  Secotr: Study for the German Federal Ministry for Economic
                  Cooperation and Development. Bonn: Federal Ministry for
                  Economic Cooperation and Development. Bertolani, F. (2017).
                  Are sustainable fashion brands ready for circularity?The
                  current state and vision of sustainable SMEs in the fashion
                  system. Lund: Environmental Management and Policy. Retrieved
                  from
                  http://lup.lub.lu.se/luur/download?func=downloadFile&recordOId=8928487&fileOId=8928488
                  Pandit, P., Nadathur, G. T., & Jose, S. (2019). Upcycled and
                  low-cost sustainable business for value added textiles and
                  fashion. Circular Economy in Textiles and Apparel, 95-122.
                </p>
                <p className="news-text"></p>
                <p className="news-text"></p>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
