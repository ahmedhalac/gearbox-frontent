import React, { useState } from "react";
import Image from "next/image";
import styles from "./LanguageSelector.module.css";
import { useTranslations } from "next-intl";

type LanguageSelectorProps = {
  activeLang: string;
  onChange: (lang: string) => void;
};

export default function LanguageSelector({
  activeLang,
  onChange,
}: LanguageSelectorProps) {
  const t = useTranslations("HeroSection");
  const [isOpen, setIsOpen] = useState(false);
  const languages = [
    {
      code: "en",
      label: `${t("languages.english")}`,
      icon: "/images/united-kingdom.png",
    },
    {
      code: "bs",
      label: `${t("languages.bosnian")}`,
      icon: "/images/bosnia-and-herzegovina.png",
    },
  ];

  const handleSelect = (lang: string) => {
    onChange(lang);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button
        className={styles.dropdownButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          src={languages.find((l) => l.code === activeLang)?.icon || ""}
          alt="Flag"
          width={16}
          height={16}
        />
        {languages.find((l) => l.code === activeLang)?.label}
        <Image
          src="/images/icons/chevron-down.svg"
          alt="Chevron down"
          width={20}
          height={20}
        />
      </button>

      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {languages.map((lang) => (
            <li key={lang.code} onClick={() => handleSelect(lang.code)}>
              <Image src={lang.icon} alt={lang.label} width={16} height={16} />
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
