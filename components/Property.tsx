import Link from "next/link";
import Image from "next/image";
// import React, { useRef, useState } from "react";
import { Flex, Box, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
// verified
import { millify } from "millify";
import DefaultImage from "../assets/images/house.jpg";

const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalId,
  },
}) => (
  <Link href={`/property/${externalId}`} passHref>
    <Flex
      flexWrap="wrap"
      w="420px"
      p="5"
      paddingTop="0"
      justifyContent="flex-start"
      cursor="pointer"
    >
      <Box>
        <Image
          src={coverPhoto ? coverPhoto.url : DefaultImage}
          width={400}
          height={260}
          alt="house"
        />
        <Box w="full">
          <Flex
            paddingTop="2"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex alignItems="3">
              <Box color="green.400">{isVerified && <GoVerified />} </Box>
              <Text fontWeight="bold" fontSize="lg">
                AED {millify(price)}
                {rentFrequency && `/${rentFrequency}`}
              </Text>
            </Flex>
            <Box>
              <Avatar size="sm" src={agency?.logo?.url} />
            </Box>
            <Flex
              alignItems="center"
              p="1"
              justifyContent="space-between"
              w="250px"
              color="blue.400"
            >
              {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{" "}
              <BsGridFill />
            </Flex>
            <Text fontSize="lg">
              {title.Length > 30 ? `${title.substrings(0, 30)}...` : title}
            </Text>
          </Flex>
        </Box>
      </Box>
    </Flex>
  </Link>
);
export default Property;
