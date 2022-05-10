import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import { SiReadthedocs } from "react-icons/si";
import { RiBookReadLine } from "react-icons/ri";
import { MdLaptopMac } from "react-icons/md";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "Getting started",
    Svg: <SiReadthedocs size={40} color="#40429B" />,
    description: <>Learn how you can get started with Razor Network.</>,
    linkURL: "/docs/what-is-an-oracle",
  },
  {
    title: "Running Razor Node",
    Svg: <MdLaptopMac size={40} color="#40429B" />,
    description: (
      <>
        Running Razor node allows you to participate in network and earn block
        rewards.
      </>
    ),
    linkURL: "/docs/razor-go/installation",
  },
  {
    title: "Whitepaper",
    Svg: <RiBookReadLine size={40} color="#40429B" />,
    description: <>Read about Razor Network Whitepaper</>,
    linkURL: "/docs/whitepaper/intro",
  },
];

function Feature({ Svg, title, description, linkURL }) {
  return (
    <Link className={clsx("col col--4")} to={linkURL}>
      <div className="text--center">{Svg}</div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
