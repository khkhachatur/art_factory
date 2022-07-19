import React from "react";
import { Link } from "react-router-dom";
import "./list.css";

// const useStyles = makeStyles({
//     grid:{
//         display: 'grid',
//         gridGap: '80px',
//         gridTemplateColumns: '1fr 1fr 1fr',
//     },
//     gridItem:{
//     }

// })

function ShopLayout({ list }) {
  //   const classes = useStyles();
  return (
    // <Box sx={{ width: "100%", height: "100%", overflow: "hidden" }}>
    //   <ImageList variant="woven" cols={3} gap={8}>
    // {list.map((item) => (
    //   <ImageListItem key={item.id} style={{ width: "100%" }}>
    //     <ShopCard
    //       creatorName={item.creatorName}
    //       itemName={item.itemName}
    //       year={item.year}
    //       price={item.price}
    //       shopImg={item.itemImg}
    //     />
    //         {/* <img
    //           src={`${item.itemImg}?w=248&fit=crop&auto=format`}
    //           srcSet={`${item.itemImg}?w=248&fit=crop&auto=format&dpr=2 2x`}
    //           alt={item.title}
    //           loading="lazy"
    //         /> */}
    //       </ImageListItem>
    //     ))}
    //   </ImageList>
    // </Box>

    <div class="listContainer">
      <div class="imageContainer">
        {list.map((item) => (
          <div class="shopCard">
            <img src={item.itemImg} />
            <Link to="/artwork">
              <div class="descriptionSec">
                <ul class="listStyle">
                  <li>{item.itemName}</li>
                  <li>{item.creatorName}</li>
                </ul>
                <ul class="listStyle">
                  <li>{item.year}</li>
                  <li>{item.price}$</li>
                </ul>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopLayout;
