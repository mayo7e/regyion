import { themeConfig, textStyle } from './themeconfig';


export const styleConfig = () => {
  const themeData = themeConfig();
  const textStyleData = textStyle();

  return {
    theme: themeData,
    textStyle: textStyleData,
  };
};

