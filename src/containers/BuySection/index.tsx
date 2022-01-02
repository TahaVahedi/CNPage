import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Element } from "react-scroll";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bgImg from "../../images/fabio.jpg";


//Images
import BaliTempleImg from "../../images/capture.jpg";


const BuySectionContainer = tw(Element)`
    w-full
    h-screen
    bg-gray-200
    flex
    flex-col
    relative
    pt-1
    pb-1
    xl:pt-2
    xl:pb-2
    items-center
`;

const LandingSection = styled.div`
    ${tw`
        w-full
        h-full
        flex
        flex-col
        bg-gray-200
    `};
    background-image: url(${bgImg});
    background-size: cover;
    background-position: buttom 10% left;
    background-blend-mode: overlay;
`;


const Title = tw.h1`
    text-3xl
    xl:text-3xl
    2xl:text-5xl
    mt-6
    lg:mt-0
    2xl:mt-6
    2xl:mb-6
    text-gray-800
    font-bold
    text-center
`;

const SectionInfo = tw.p`
    text-base
    2xl:text-lg
    text-gray-700
    text-center
    mt-8
    2xl:mt-2
    max-w-lg
    xl:max-w-3xl
    pl-4
    pr-4
    lg:pl-2
    lg:pr-2
`;

const ExploreSectionWrapper = tw.div`
    w-full
    h-full
    flex
    flex-col
    justify-center
    items-center
    mt-3
    xl:mt-6
    2xl:mt-10
    max-w-sm
    xl:max-w-2xl
    2xl:max-w-4xl
`;

const Item = styled.div`
  ${tw`
        flex
        flex-col
    `}

  img {
    ${tw`
            max-w-full
            max-h-full
        `}
  }
`;

const Description = tw.p`
    text-gray-300
    text-center
    bg-black
    bottom-10
    left-1/2
    pl-4
    pr-4
    pt-2
    pb-2
    rounded-2xl
    opacity-80
    transform[translateX(-50%)]
    absolute
`;

export function BuySection() {
  return (
    <LandingSection>
      <BuySectionContainer name="Buy">
        <Title>How buy them?</Title>
        <SectionInfo>
          For buy these NFT's go to my rarible <a target={"_blank"} href="https://rarible.com/metaking_original/sale"> account </a>
           and after buy every 5 NFT go to this site<br />(<a target={"_blank"} href="https://api-chained-nfts.herokuapp.com/">chained NFT'sAPI</a>)
          and put your CID's and golden key there to merge and decrypt files after submit you get the secret file behind these NFT's.
          (golden key mint after 2 week)
        </SectionInfo>
        <ExploreSectionWrapper>
          <Item>
            <img src={BaliTempleImg} />
          </Item>
        </ExploreSectionWrapper>
      </BuySectionContainer>
    </LandingSection>
  );
}
