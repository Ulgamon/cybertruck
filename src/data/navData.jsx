import modelS from "../assets/products/modesS.avif";
import model3 from "../assets/products/Model-3.avif";
import modelX from "../assets/products/Model-X.avif";
import modelY from "../assets/products/Model-Y.avif";
import helpChoose from "../assets/products/RedBlue.png";

import solarRoof from "../assets/energy/Solar-Roof.avif";
import solarPanels from "../assets/energy/Solar-Panels.avif";
import megapack from "../assets/energy/Energy-Megapack.avif";
import powerwall from "../assets/energy/Powerwall.avif";

import charging from "../assets/charging/Charging.avif";
import homeCharging from "../assets/charging/Home-Charging.avif";
import superCharging from "../assets/Supercharging.avif";

import apparel from "../assets/shop/Shop-Apparel.avif";
import chargingShop from "../assets/shop/Shop-Charging.avif";
import lifestyle from "../assets/shop/Shop-Lifestyle.avif";
import accessories from "../assets/shop/Shop-Accessories.avif";

export const navProductsData = [
  {
    title: "Vehicles",
    products: [
      {
        title: "Model S",
        imagePath: modelS,
        links: [
          {
            title: "Learn",
            url: "https://www.tesla.com/models",
          },
          {
            title: "Order",
            url: "https://www.tesla.com/models/design#overview",
          },
        ],
      },
      {
        title: "Model 3",
        imagePath: model3,
        links: [
          {
            title: "Learn",
            url: "https://www.tesla.com/model3",
          },
          {
            title: "Order",
            url: "https://www.tesla.com/model3/design#overview",
          },
        ],
      },
      {
        title: "Model X",
        imagePath: modelX,
        links: [
          {
            title: "Learn",
            url: "https://www.tesla.com/modelx",
          },
          {
            title: "Order",
            url: "https://www.tesla.com/modelx/design#overview",
          },
        ],
      },
      {
        title: "Model y",
        imagePath: modelY,
        links: [
          {
            title: "Learn",
            url: "https://www.tesla.com/modely",
          },
          {
            title: "Order",
            url: "https://www.tesla.com/modely/design#overview",
          },
        ],
      },
      {
        title: "Help Me Choose",
        imagePath: helpChoose,
        links: [
          {
            title: "Get Started",
            url: "https://www.tesla.com/choose",
          },
        ],
      },
    ],
    sideLinks: [
      {
        title: "Inventory",
        url: "https://www.tesla.com/inventory/new/ms?arrangeby=relevance&range=0",
      },
      {
        title: "Used Cars",
        url: "https://www.tesla.com/inventory/used/ms?arrangeby=plh",
      },
      {
        title: "Demo Drive",
        url: "https://www.tesla.com/drive",
      },
      {
        title: "Trade-in",
        url: "https://www.tesla.com/tradein",
      },
      {
        title: "Help Me Choose",
        url: "https://www.tesla.com/choose",
      },
      {
        title: "Compare",
        url: "https://www.tesla.com/compare",
      },
      {
        title: "Fleet",
        url: "https://www.tesla.com/fleet",
      },
      {
        title: "Cybertruck",
        url: "https://www.tesla.com/cybertruck",
      },
      {
        title: "Semi",
        url: "https://www.tesla.com/semi",
      },
      {
        title: "Roadster",
        url: "https://www.tesla.com/roadster",
      },
    ],
  },
  {
    title: "Energy",
    products: [
      {
        title: "Solar Panels",
        imagePath: solarPanels,
        links: [
          {
            title: "Learn",
            url: "https://www.tesla.com/solarpanels",
          },
          {
            title: "Order",
            url: "https://www.tesla.com/energy/design",
          },
        ],
      },
      {
        title: "Solar Roof",
        imagePath: solarRoof,
        links: [
          {
            title: "Learn",
            url: "https://www.tesla.com/solarroof",
          },
          {
            title: "Order",
            url: "https://www.tesla.com/energy/design",
          },
        ],
      },
      {
        title: "Powerwall",
        imagePath: powerwall,
        links: [
          {
            title: "Learn",
            url: "https://www.tesla.com/powerwall",
          },
          {
            title: "Order",
            url: "https://www.tesla.com/powerwall/design",
          },
        ],
      },
      {
        title: "Megapack",
        imagePath: megapack,
        links: [
          {
            title: "Learn",
            url: "https://www.tesla.com/megapack",
          },
          {
            title: "Order",
            url: "https://www.tesla.com/megapack/design",
          },
        ],
      },
    ],
    sideLinks: [
      {
        title: "Schedule a Consultation",
        url: "https://www.tesla.com/solar-virtual-consultations",
      },
      {
        title: "Why Solar",
        url: "https://www.tesla.com/why-solar",
      },
      {
        title: "Incentives",
        url: "https://www.tesla.com/support/energy/powerwall/learn/incentives",
      },
      {
        title: "Support",
        url: "https://www.tesla.com/support/energy",
      },
      {
        title: "Partner with Tesla",
        url: "https://www.tesla.com/support/energy/powerwall/installer-resources/partner-with-tesla",
      },
      {
        title: "Commercial",
        url: "https://www.tesla.com/commercial",
      },
      {
        title: "Utilities",
        url: "https://www.tesla.com/utilities",
      },
    ],
  },
  {
    title: "Charging",
    products: [
      {
        title: "Charging",
        imagePath: charging,
        links: [
          {
            title: "Learn",
            url: "https://www.tesla.com/charging",
          },
        ],
      },
      {
        title: "Home Charging",
        imagePath: homeCharging,
        links: [
          {
            title: "Learn",
            url: "https://www.tesla.com/home-charging",
          },
          {
            title: "Order",
            url: "https://shop.tesla.com/category/charging#charging.at-home",
          },
        ],
      },
      {
        title: "Supercharging",
        imagePath: superCharging,
        links: [
          {
            title: "Learn",
            url: "https://www.tesla.com/supercharger",
          },
          {
            title: "Find",
            url: "https://www.tesla.com/findus?v=2&bounds=53.58987221579822%2C25.906466983616905%2C42.27402695442498%2C-9.249783016383093&zoom=6&filters=store%2Cservice%2Csupercharger%2Cdestination%20charger%2Cbodyshop%2Cparty%2Cself%20serve%20demo%20drive&location=CraigCOsupercharger",
          },
        ],
      },
    ],
    sideLinks: [
      {
        title: "Charging Calculations",
        url: "https://www.tesla.com/charging-calculator",
      },
      {
        title: "Trip Planner",
        url: "https://www.tesla.com/trips",
      },
      {
        title: "Supercharger Voting",
        url: "https://www.tesla.com/supercharger-voting/overview",
      },
      {
        title: "Host a Supercharger",
        url: "https://www.tesla.com/host-a-supercharger",
      },
      {
        title: "Commercial Charging",
        url: "https://www.tesla.com/commercial-charging",
      },
      {
        title: "Host Wall Connectors",
        url: "https://www.tesla.com/charging-partners",
      },
    ],
  },
  {
    title: "Discover",
    Resources: [
      {
        title: "Demo Drive",
        url: "https://www.tesla.com/drive",
      },
      {
        title: "Insurance",
        url: "https://www.tesla.com/insurance",
      },
      {
        title: "Video Guides",
        url: "https://www.tesla.com/support/videos",
      },
      {
        title: "Customer Stories",
        url: "https://www.tesla.com/customer-stories",
      },
      {
        title: "Events",
        url: "https://www.tesla.com/events",
      },
    ],
    "Location Services": [
      {
        title: "Find Us",
        url: "https://www.tesla.com/findus?v=2&bounds=51.766454692859725%2C-64.11035275%2C25.817657074070205%2C-134.42285275&zoom=5&filters=store%2Cservice%2Csupercharger%2Cdestination%20charger%2Cbodyshop%2Cparty%2Cself%20serve%20demo%20drive",
      },
      {
        title: "Trip Planner",
        url: "https://www.tesla.com/trips",
      },
      {
        title: "Find a Collision Center",
        url: "https://www.tesla.com/support/collision-support",
      },
      {
        title: "Find a Certified Installer",
        url: "https://www.tesla.com/support/certified-installers",
      },
    ],
    Company: [
      {
        title: "About Us",
        url: "https://www.tesla.com/about",
      },
      {
        title: "Carrers",
        url: "https://www.tesla.com/careers",
      },
      {
        title: "Investor Relations",
        url: "https://ir.tesla.com/#quarterly-disclosure",
      },
    ],
  },
  {
    title: "Shop",
    url: "https://shop.tesla.com/",
    items: [
      {
        title: "Charging",
        imagePath: chargingShop,
        url: "https://shop.tesla.com/category/charging",
      },
      {
        title: "Vehicle Accessories",
        imagePath: accessories,
        url: "https://shop.tesla.com/category/vehicle-accessories",
      },
      {
        title: "Apparel",
        imagePath: apparel,
        url: "https://shop.tesla.com/category/apparel",
      },
      {
        title: "Lifestyle",
        imagePath: lifestyle,
        url: "https://shop.tesla.com/category/lifestyle",
      },
    ],
  },
];

// Need to add "Discover" and "Shop" data
