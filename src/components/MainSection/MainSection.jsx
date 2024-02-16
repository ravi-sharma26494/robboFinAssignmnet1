import React, { useState } from "react";
import "./MainSection.css";
import Button from "../button/button.component";

import BellIcon from "../../assets/icons/BellIcon";
import CheckedIcon from "../../assets/icons/CheckedIcon";
import DottedArrowIcon from "../../assets/icons/DottedArrowIcon";
import Breadcrumbs from "../breadcrumbs/breadcrumbs.component";
import siteImage from "/siteimage01.svg";
import ArrowIcon from "../../assets/icons/ArrowIcon.svg";
import LocationIconPlus from "../../assets/icons/LocationIconPlus";

import ThunderIcon from "../../assets/icons/thunder.svg?react";
import DropIcon from "../../assets/icons/drop.svg?react";
import ScooterIcon from "../../assets/icons/scooter.svg?react";
import PremiumIcon from "../../assets/icons/premium.svg?react";
import ArrowBack from "../../assets/icons/arrow_back.svg?react";
import AirplaneIcon from "../../assets/icons/airplane.svg?react";
import HighwayIcon from "../../assets/icons/road.svg?react";

import SmallInfoWrapper from "../smallInfoWrapper/smallInfoWrapper.component";
import Badge from "../badge/badge.component";
import PricerangeDisplayer from "../price-range-displayer/price-range-displayer.component";
import InfoCards from "../cards/info-cards.component";
import { cardsData } from "../../data/cards.data";
import LandmarkCard from "../cards/landmark-card.component";
import { SimpleCardComponent } from "../cards/simple-card-component";
import ActionCardPending from "../cards/action-card-pending.component";
import ActionCardCompleted from "../cards/action-card-completed";
import DefaultModal from "../modal/modal.component";

const MainSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClick = () => {
    alert("Button clicked!");
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="main-section">
      <div className="complete-profile-section header-base-wrapper">
        <Button text="Complete Profile" onClick={toggleModal} />
        <div className="icon-warpper" style={{ cursor: "pointer" }}>
          <BellIcon onClick={() => alert("Ola")} />
        </div>
      </div>

      <div className="site-details-nav-section header-base-wrapper">
        <span className="title">Choose your new site</span>
        <div className="nav-links-section">
          <div className="link-content-section active-link">
            <div className="link-text link-text-active">
              <CheckedIcon />
              <span className="nav-links-single-number">1</span>
            </div>
            <span className="underline-active"></span>
          </div>
          <DottedArrowIcon />

          <div className="link-content-section disabled-link">
            <div className="link-text link-text-disabled">
              <span className="nav-links-single-number nav-links-single-number-disabled">
                2
              </span>
            </div>
            <span className="underline-disabled"></span>
          </div>

          <DottedArrowIcon />
          <div className="link-content-section disabled-link">
            <div className="link-text link-text-disabled">
              <span className="nav-links-single-number nav-links-single-number-disabled">
                3
              </span>
            </div>
            <span className="underline-disabled"></span>
          </div>
        </div>
      </div>
      <div className="site-hero-section">
        <div className="site-breadcrumbs">
          <Breadcrumbs />
        </div>
        <div className="hero-image-section">
          <img src={siteImage} className="site-pic" alt="Site Pic One" />
        </div>
        <div className="site-info-section grid grid-cols-1 lg:grid-cols-2">
          <div className="site-info-left">
            <div className="site-heading-wrapper">
              <span className="site-heading-text">Theme Park Site</span>
            </div>
            <div className="site-ameneties-wrapper">
              <div className="address-section">
                <LocationIconPlus />
                <span className="site-address">Address of the site</span>
              </div>
              <div className="ameneties-section">
                <Badge badgeText={"Adult Rides"} badgeIcon={<ThunderIcon />} />
                <Badge badgeText={"Family Rides"} badgeIcon={<DropIcon />} />
                <Badge badgeText={"Resturants"} badgeIcon={<ScooterIcon />} />
                <Badge badgeText={"Premium"} badgeIcon={<PremiumIcon />} />
                {/* <Thunder /> */}
              </div>
            </div>
            <div className="site-extra-link-wrapper">
              <img src={ArrowIcon} alt="arrow-icon" />
              <a href="#" className="site-extra-link-wrapper-text">
                View opportunity on polygon
              </a>
            </div>
            <div className="site-numbers-wrapper">
              <SmallInfoWrapper title={"200 Acres"} subtitle={"Area"} />
              <SmallInfoWrapper title={"5 Lacks"} subtitle={"Starting price"} />
              <SmallInfoWrapper
                title={"10 days "}
                subtitle={"Remaining Days"}
              />
              <SmallInfoWrapper title={"2.5 years"} subtitle={"Next check"} />
            </div>
          </div>
          <div className="site-info-right">
            <div className="right-elements-wrapper">
              <Button
                text="Continue"
                className={"button-large"}
                onClick={toggleModal}
              ></Button>
            </div>
            <div className="right-elements-wrapper">
              <Button
                text="Site Visit"
                className={"button-outline-medium"}
                onClick={handleClick}
                buttonIcon={<ArrowBack />}
              ></Button>
            </div>
            <PricerangeDisplayer
              minValue={"20,00,000"}
              maxValue={"65,00,000"}
            />
          </div>
        </div>
      </div>

      <div className="info-cards">
        {cardsData.map((card, index) => (
          <InfoCards
            key={card.id}
            title={card.title}
            description={card.description}
          />
        ))}
        <div className="landmark-details">
          <span className="landmark-details-title">Landmark</span>
          <LandmarkCard
            icon={<AirplaneIcon />}
            distance={"100 K.M"}
            additionalDetail={"Terminal One"}
            iconText={"Airport"}
          />
          <LandmarkCard
            icon={<AirplaneIcon />}
            distance={"25 K.M"}
            additionalDetail={"Greenwhich Terminal"}
            iconText={"Airport"}
          />
          <LandmarkCard
            icon={<HighwayIcon />}
            distance={"100 K.M"}
            additionalDetail={"Highway Number 5"}
            iconText={"Highway"}
          />
        </div>
        <SimpleCardComponent />
      </div>
      {/* Modal */}
      {isModalOpen && <DefaultModal onClose={toggleModal}></DefaultModal>}
    </div>
  );
};

export default MainSection;
