import { Box } from "@mui/material";
import styles from "./styles.module.css";
import CardComponent from "../Card/CardComponent";
import cards from "../../data.json";
import { ReactComponent as IconSedans } from "../../assets/icon-sedans.svg";
import { ReactComponent as IconSuvs } from "../../assets/icon-suvs.svg";
import { ReactComponent as IconLuxury } from "../../assets/icon-luxury.svg";

const ThreeCardsPreview = () => {
  return (
    <Box className={styles["container"]}>
      {cards.map(({ name, text, backgroundColor, icon }, key) => (
        <CardComponent
          key={key}
          name={name}
          text={text}
          icon={<Icon name={icon} />}
          backgroundColor={backgroundColor}
        />
      ))}
    </Box>
  );
};

const Icon = ({ name }: { name: string }) => {
  return name === "icon-sedans" ? (
    <IconSedans />
  ) : name === "icon-suvs" ? (
    <IconSuvs />
  ) : name === "icon-luxury" ? (
    <IconLuxury />
  ) : null;
};

export default ThreeCardsPreview;
