import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Card from "../../components/card";
import Sidenav from "../../components/layout";
import { BusStyle } from "../../styles/pages/busStyles";

export default function Fan() {
  const router = useRouter();
  const handleClick = (val: number) => {
    router.push(`/bus/${val}`);
  };
  return (
    <>
      <Sidenav />
      <BusStyle>
        <div className="card_flex">
          <Card>
            <div onClick={() => handleClick(1)}>
              <Image src="/assets/buses/bus1.jpg" width={500} height={400} />
              <p>bus1</p>
            </div>
          </Card>

          <Card>
            <div onClick={() => handleClick(2)}>
              <Image src="/assets/buses/bus2.jpg" width={500} height={400} />
              <p>bus2</p>
            </div>
          </Card>

          <Card>
            <div onClick={() => handleClick(3)}>
              <Image src="/assets/buses/bus3.jpg" width={500} height={400} />
              <p>bus3</p>
            </div>
          </Card>
        </div>
      </BusStyle>
    </>
  );
}
