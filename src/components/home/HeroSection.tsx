import React from "react";
import styles from "./HeroSection.module.css";
import Image from "next/image";

export default function HeroSection() {
  return (
    <header>
      <nav className={styles.navbar}>
        <div>
          <ul className={styles.items}>
            <li>Products</li>
            <li>Delivery</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <ul className={styles.items}>
            <li className={styles.shops}>
              <Image
                src="/images/icons/store.svg"
                alt="Store icon"
                width={24}
                height={24}
              />
              <span>Shop</span>
            </li>
            <li>Lang</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
