import Link from "next/link";
import React from "react";
import { NavLink } from "../../utilities/commonHelpers/NavLink";
import { Container } from "./style";

export default function Sidenav() {
  return (
    <Container>
      <NavLink href="/fan" activeClassName="active" passHref>
        <div>Latest Fans</div>
      </NavLink>
      <NavLink href="/bus" activeClassName="active" passHref>
        <div>Latest Bus</div>
      </NavLink>
      <NavLink href="/house" activeClassName="active" passHref>
        <div>Latest Houses</div>
      </NavLink>
      {/* <NavLink href="/fan" activeClassName="active" passHref>
        <div>Latest Fans</div>
      </NavLink>
      <NavLink href="/bus" activeClassName="active" passHref>
        <div>Latest Bus</div>
      </NavLink>
      <NavLink href="/house" activeClassName="active" passHref>
        <div>Latest Houses</div>
      </NavLink> */}
    </Container>
  );
}
