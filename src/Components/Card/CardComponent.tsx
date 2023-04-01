import { Box, Button, Typography } from "@mui/material";
import styles from "./styles.module.css";
import { ReactComponent as IconSedans } from "../../assets/icon-sedans.svg";
import classNames from "classnames";

interface ICardComponentProps {
  name?: string;
  text?: string;
  icon?: any;
  backgroundColor?: string;
}

const CardComponent = ({
  icon,
  name,
  text,
  backgroundColor,
}: ICardComponentProps) => {
  return (
    <Box
      className={classNames(styles["container"])}
      sx={{ backgroundColor: backgroundColor }}
    >
      {icon}
      <Typography className={styles["name"]} variant="h1">
        {name}
      </Typography>
      <Typography className={styles["text"]}>{text}</Typography>
      <Button
        className={styles["btn"]}
        sx={{
          "&:hover": {
            color: "hsl(0, 0%, 95%)",
          },
          color: backgroundColor,
        }}
      >
        Learn More
      </Button>
    </Box>
  );
};

export default CardComponent;
