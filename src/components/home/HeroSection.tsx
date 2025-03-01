"use client";

import React, { useState } from "react";
import styles from "./HeroSection.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("HeroSection");
  const [language, setLanguage] = useState("en");
  return (
    <header>
      <nav className={styles.navbar}>
        <div>
          <ul className={styles.items}>
            <li>{t("items.products")}</li>
            <li>{t("items.delivery")}</li>
            <li>{t("items.support")}</li>
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
              <span>{t("items.shops")}</span>
            </li>
            <li>
              <select value={language} className={styles.languageSelector}>
                <option value="en">English</option>
                <option value="bs">Bosnian</option>
              </select>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
