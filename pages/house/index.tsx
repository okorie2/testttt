import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Card from "../../components/card";
import Sidenav from "../../components/layout";
import { FansStyle } from "../../styles/pages/fanStyles";
import { HouseStyle } from "../../styles/pages/houseStyles";

export default function Fan() {
  const router = useRouter();
  const handleClick = (val: number) => {
    router.push(`/house/${val}`);
  };
  return (
    <>
      <Sidenav />
      <HouseStyle>
        <div className="card_flex">
          <Card>
            <div onClick={() => handleClick(1)}>
              <Image
                src="/assets/houses/house1.jfif"
                width={500}
                height={400}
              />
              <p>house1</p>
            </div>
          </Card>
          <Card>
            <div onClick={() => handleClick(2)}>
              <Image
                src="/assets/houses/house2.jfif"
                width={500}
                height={400}
              />
              <p>house2</p>
            </div>
          </Card>{" "}
          <Card>
            <div onClick={() => handleClick(3)}>
              <Image
                src="/assets/houses/house3.jfif"
                width={500}
                height={400}
              />
              <p>house3</p>
            </div>
          </Card>
        </div>
      </HouseStyle>
    </>
  );
}
