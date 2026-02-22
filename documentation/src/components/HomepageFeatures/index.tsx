import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Smart Contracts",
    icon: "\u{1F4DC}",
    description: (
      <>
        Build secure, efficient smart contracts on Stellar using Soroban's
        Rust-based SDK. Deploy and invoke contracts with confidence.
      </>
    ),
    link: "/getting-started/first-contract",
  },
  {
    title: "Quick Setup",
    icon: "\u{26A1}",
    description: (
      <>
        Get up and running in minutes with the Soroban CLI and Rust toolchain.
        From installation to your first deployment, we've got you covered.
      </>
    ),
    link: "/getting-started/setup",
  },
  {
    title: "Core Concepts",
    icon: "\u{1F9E0}",
    description: (
      <>
        Understand the fundamentals of Soroban — from contract lifecycle and
        storage to authentication and cross-contract calls.
      </>
    ),
    link: "/concepts/overview",
  },
  {
    title: "Reusable Patterns",
    icon: "\u{1F504}",
    description: (
      <>
        Leverage battle-tested design patterns for token contracts, access
        control, upgradability, and more.
      </>
    ),
    link: "/patterns/overview",
  },
  {
    title: "Rust-Powered",
    icon: "\u{1F980}",
    description: (
      <>
        Harness Rust's memory safety and performance. Soroban contracts compile
        to WebAssembly for fast, predictable execution.
      </>
    ),
    link: "/getting-started/setup",
  },
  {
    title: "Stellar Network",
    icon: "\u{1F310}",
    description: (
      <>
        Tap into Stellar's global financial network. Build DeFi apps, issue
        assets, and interact with the Stellar ecosystem natively.
      </>
    ),
    link: "/concepts/overview",
  },
];

function FeatureCard({ title, icon, description, link }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <Link to={link} className={styles.featureCardLink}>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>{icon}</div>
          <Heading as="h3" className={styles.featureTitle}>
            {title}
          </Heading>
          <p className={styles.featureDescription}>{description}</p>
          <span className={styles.featureLearnMore}>Learn more &rarr;</span>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Why Soroban Cookbook?
          </Heading>
          <p className={styles.sectionSubtitle}>
            Everything you need to build smart contracts on Stellar
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <FeatureCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
