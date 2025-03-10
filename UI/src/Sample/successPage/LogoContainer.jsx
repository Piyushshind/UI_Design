"use client";
import * as React from "react";
import styles from "./LogoContainer.module.css";
import Logo from "./Logo";
import VerificationSuccess from "./VerificationSuccess";

function LogoContainer() {
  return (
    <>
      <Logo />
      <VerificationSuccess />
    </>
  );
}

export default LogoContainer;
