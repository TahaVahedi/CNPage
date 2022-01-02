import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Element, Link } from "react-scroll";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BgImg from "../../images/backend2.jpg";
import { BsArrowDownCircle } from "react-icons/bs";


//Images
import BaliTempleImg from "../../images/docs-img.jpg";


const ExploreSectionContainer = tw(Element)`
    w-full
    h-screen
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
        flex
        flex-col
        bg-gray-200
    `};
    background-image: url(${BgImg});
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
    text-4xl
    left-1/2
    pl-4
    pr-4
    pt-2
    pb-2
    rounded-2xl
    opacity-80
    transform[translateX(-50%)]
    absolute
    hover:text-green-400
`;


export function ExploreSection() {
  return (
    <LandingSection>
      <ExploreSectionContainer name="HowItWorks">
        <Title>How it works?</Title>
        <SectionInfo>
          There are five NFT's you most buy to find the secret, Actullay they are chained to each others.
          They work like a real world collections one piece doesn't have any worth
          if you have four chest pieces and merge them then you can use golden key
          to open the encrypted data and see what's behind them.
          <br />(for doing this stuff see this <a target={"_blank"} href="https://github.com/TahaVahedi/Chained-NFTs-API">repo</a>)
        </SectionInfo>
        <ExploreSectionWrapper>
          <Item>
            <img src={BaliTempleImg} />
            <Description>
              <Link to="Buy" smooth={"easeInOutQuad"} duration={1000}>
                <BsArrowDownCircle />
              </Link>
            </Description>
          </Item>
        </ExploreSectionWrapper>
      </ExploreSectionContainer>
    </LandingSection>
  );
}
