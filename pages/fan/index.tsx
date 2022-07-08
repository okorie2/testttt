import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Card from "../../components/card";
import Sidenav from "../../components/layout";
import { FansStyle } from "../../styles/pages/fanStyles";

export default function Fan() {
  const router = useRouter();
  const handleClick = (val: number) => {
    router.push(`/fan/${val}`);
  };
  return (
    <>
      <Sidenav />
      <FansStyle>
        <div className="card_flex">
          <Card>
            <div onClick={() => handleClick(1)}>
              <Image src="/assets/fans/fan1.jpg" width={500} height={400} />
              <p>fan1</p>
            </div>
          </Card>
          <Card>
            <div onClick={() => handleClick(2)}>
              <Image src="/assets/fans/fan2.jpg" width={500} height={400} />
              <p>fan2</p>
            </div>
          </Card>{" "}
          <Card>
            <div onClick={() => handleClick(3)}>
              <Image src="/assets/fans/fan3.jpg" width={500} height={400} />
              <p>fan3</p>
            </div>
          </Card>
        </div>
      </FansStyle>
    </>
  );
}
