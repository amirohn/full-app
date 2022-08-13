import {useRouter} from "next/router";
import {
  Card,
  CardActionArea,
  CardMedia,
  Box,
  Container,
  CardActions,
  Button,
} from "@mui/material";
import {useContext} from "react";
import {ProductContext} from "../../context/prodcutContext";
import {PdpCard} from "../../component/PDPCard/pdpcard";

const Post = () => {
  const allData = useContext(ProductContext);
  const router = useRouter();
  const {slug} = router.query;
  const realData = Number(slug);

  const PDPdata = allData.find((item) => item.id === realData);

  return (
    <div>
      <Card>{PDPdata && <PdpCard PDPdata={PDPdata}></PdpCard>}</Card>
    </div>
  );
};

export default Post;
