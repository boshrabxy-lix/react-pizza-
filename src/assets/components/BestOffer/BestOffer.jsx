import React from "react";
import style from "./BestOffer.module.css";
import { Link } from "react-router-dom";

export default function BestOffer() {
  const offers = [
    {
      id: 1,
      badge: "Save 30%",
      title: "Midnight Feast",
      description: "2 Large Pizzas + Fries + Family Drink",
      price: "129 SAR",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCgiLcjhWIPETfjata2FsyMwQ71d53AipWt55QSJ1h5Z0xNNhbylIEaXvxp6wbQ5HkWzRRpp4eNjsfdi46y9BJWiwIGsZiQ8eGoaxvvzujClUY8aS2s7fhaxaO8AU-wVVl8Dzn6Aqbr6A_I3unsg9nTozV0sLujHu_Lgeuz60Tb60AvjPjVtNpr0tm0ZlokoCgi5qk83mIbt4tWSGGKLnFVloC99TbWNcH4oZiqlTJpO68K2LhC0nfaIxdgfa-e5MieHXxy71tjj0E",
    },
    {
      id: 2,
      badge: "Bestseller",
      title: "Solo Night Deal",
      description: "Medium Pizza + Choice of Appetizer",
      price: "55 SAR",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDulorlXfdc3m4IvYyavG3JOkldKoiAeN0AnxO_N0tIVdE4nhXpTvVmmNucJ9evcV5am0az1Pfrj24GEaS5sogYXP6Y4MHIHdQn8lONCXNFHAXX4F_rV6x9-IIyBtp4__ZSyo_rNYrOwLK49UktLh9JB4OYP34iPh6pq38IqeVSbNIBZAaToQux6_FZKNcmt8anNY2ZvWUDIra6YbLQP22_3t138-30LqH50HBBtzdzwv52k3t6fVZ-dLlUhLhcPZ32mF3KMAA0cUM",
    },
    {
      id: 3,
      badge: "Buy 1 Get 1",
      title: "Thursday Night Vibes",
      description: "Valid every Thursday after 10 PM",
      price: "79 SAR",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAL7H3VGbvZj7-xliZ_AFZwa0O-nq3stzORguXqXw7F5fDI8RsjmbCPXTNHv_M0ZldxiGQ4zvKZOfV_7vS10eVuwwrm9HhEQquox7ndOqM73aYXhMeybfXj-Ytw80BzejFnnizlpRvjenvMo0hO_EbT0GkRwdRIBftg6iXNKD9djcVMpbsqPyqpC72-MMZeI0Tb4zZhI_fqFno9Nksg9mL6sPMdWn61exO4m385w-B2h-m69eWdLunPGWN1_05tzKQ1Ay82tMh1YCw",
    },
  ];

  return (
    <section className={`${style.offersSection} text-white`}>
      <div className="container">
        <div className="d-flex justify-content-between align-item-end mb-4" >
          <div className="position-relative">
            <h2 className={`${style.sectionTitle} fw-bold fs-4 fw-semibold`}>Best Offers</h2>
            <div className={style.titleUnderline}></div>
          </div>
          <Link to="/getpizza" className={`${style.viewAllBtn} d-flex align-items-center text-decoration-none fw-bold`}>
            View All <span className={style.arrow}>&rarr;</span>
          </Link>
        </div>

        <div className={style.cardsGrid}>
          {offers.map((offer) => (
            <div key={offer.id} className={`${style.offerCard}  overflow-hidden `}>
              <div className={`${style.imageContainer} overflow-hidden w-100 position-relative`}>
                <img
                  src={offer.imageUrl}
                  alt={offer.title}
                  className="d-block object-fit-cover w-100 h-100"
                />
                <div className={`${style.cardOverlay}  d-flex flex-column justify-content-end position-absolute top-0 left-0 w-100 h-100`}>
                  <span className={`${style.badge} text-black fw-semibold`}>{offer.badge}</span>
                  <h3 className={`${style.cardTitle} fw-semibold text-white`}>{offer.title}</h3>
                  <p className={style.cardDescription}>{offer.description}</p>
                  <span className={`${style.cardPrice} fw-semibold`}>{offer.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
