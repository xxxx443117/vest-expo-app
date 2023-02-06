import { Image } from "native-base";
import React from "react";

const logo = require('@/assets/images/logo/logo3.png');

const rate = 0.6
const Logo = () => {
  return <Image alt="LOGO" style={{ marginLeft: -5 }} source={logo} width={194 * rate} height={52 * rate} />
}
export default Logo;
