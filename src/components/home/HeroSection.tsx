"use client";
import React from "react";
import styles from "./HeroSection.module.css";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import LanguageSelector from "../LanguageSelector";

export default function HeroSection() {
  const t = useTranslations("HeroSection");
  const router = useRouter();
  const localActive = useLocale();

  const handleLanguageChange = (country: string) => {
    router.replace(`/${country}`);
  };
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
              <LanguageSelector
                activeLang={localActive}
                onChange={handleLanguageChange}
              />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
