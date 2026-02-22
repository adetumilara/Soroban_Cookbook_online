import type { ReactNode } from "react";
import Heading from "@theme/Heading";
import { FeatureCard } from "@site/src/components/cards";
import styles from "./styles.module.css";

const FeatureList = [
  {
    icon: "\u{1F4DC}",
    title: "Smart Contracts",
    description:
      "Build secure, efficient smart contracts on Stellar using Soroban\u2019s Rust-based SDK. Deploy and invoke contracts with confidence.",
    accent: "#6366f1",
    href: "/getting-started/first-contract",
  },
  {
    icon: "\u26A1",
    title: "Quick Setup",
    description:
      "Get up and running in minutes with the Soroban CLI and Rust toolchain. From installation to your first deployment.",
    accent: "#10b981",
    href: "/getting-started/setup",
  },
  {
    icon: "\u{1F9E0}",
    title: "Core Concepts",
    description:
      "Understand the fundamentals of Soroban \u2014 from contract lifecycle and storage to authentication and cross-contract calls.",
    accent: "#8b5cf6",
    href: "/concepts/overview",
  },
  {
    icon: "\u{1F504}",
    title: "Reusable Patterns",
    description:
      "Leverage battle-tested design patterns for token contracts, access control, upgradability, and more.",
    accent: "#f59e0b",
    href: "/patterns/overview",
  },
  {
    icon: "\u{1F980}",
    title: "Rust-Powered",
    description:
      "Harness Rust\u2019s memory safety and performance. Soroban contracts compile to WebAssembly for fast, predictable execution.",
    accent: "#ef4444",
    href: "/getting-started/setup",
  },
  {
    icon: "\u{1F310}",
    title: "Stellar Network",
    description:
      "Tap into Stellar\u2019s global financial network. Build DeFi apps, issue assets, and interact with the ecosystem natively.",
    accent: "#0ea5e9",
    href: "/concepts/overview",
  },
];

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionLabel}>
            Why Soroban Cookbook?
          </Heading>
          <p className={styles.sectionDescription}>
            Everything you need to build smart contracts on Stellar
          </p>
        </div>
        <div className={styles.gridThree}>
          {FeatureList.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
