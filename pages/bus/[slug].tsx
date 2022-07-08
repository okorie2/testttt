import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Card from "../../components/card";
import Sidenav from "../../components/layout";
import { BusStyle } from "../../styles/pages/busStyles";

export default function SubBuses() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>
      <Sidenav />
      <BusStyle>
        <div className="card_flex">
          <Card>
            <div>
              <Image
                src={`/assets/buses/bus${slug}.jpg`}
                width={500}
                height={400}
              />
            </div>
          </Card>
        </div>
        <p>bus {slug}</p>
      </BusStyle>
    </div>
  );
}
