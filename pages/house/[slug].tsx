import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Card from "../../components/card";
import Sidenav from "../../components/layout";

import { HouseStyle } from "../../styles/pages/houseStyles";

export default function SubHouse() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>
      <Sidenav />
      <HouseStyle>
        <div className="card_flex">
          <Card>
            <div>
              <Image
                src={`/assets/houses/house${slug}.jpg`}
                width={500}
                height={400}
              />
            </div>
          </Card>
        </div>
        <p>House {slug}</p>
      </HouseStyle>
    </div>
  );
}
