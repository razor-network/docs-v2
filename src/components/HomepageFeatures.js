import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import { RiBookReadLine } from "react-icons/ri";
import { MdLaptopMac } from "react-icons/md";
import { FaRocket } from "react-icons/fa";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "Getting started",
    Svg: <FaRocket size={40} />,
    description: <>Learn how you can get started with Razor Network.</>,
    linkURL: "/docs/what-is-an-oracle",
  },
  {
    title: "Whitepaper",
    Svg: <RiBookReadLine size={40} />,
    description: <>Read about Razor Network Whitepaper</>,
    linkURL: "/docs/whitepaper/intro",
  },
  {
    title: "Running Razor Node",
    Svg: <MdLaptopMac size={40} />,
    description: (
      <>
        Running Razor node allows you to participate in network and earn block
        rewards.
      </>
    ),
    linkURL: "/docs/razor-go/installation",
  },
];

function Feature({ Svg, title, description, linkURL }) {
  return (
    <Link className={clsx(`col col--4 ${styles.link}`)} to={linkURL}>
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
