import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Card from "../../components/card";
import Sidenav from "../../components/layout";
import { BusStyle } from "../../styles/pages/busStyles";
import { FansStyle } from "../../styles/pages/fanStyles";

export default function SubFans() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>
      <Sidenav />
      <FansStyle>
        <div className="card_flex">
          <Card>
            <div>
              <Image
                src={`/assets/fans/fan${slug}.jpg`}
                width={500}
                height={400}
              />
            </div>
          </Card>
        </div>
        <p>Fan {slug}</p>
      </FansStyle>
    </div>
  );
}
