import { FaHeart } from "react-icons/fa";

import { Button } from "../ui/button";

function FavoriteToggleButton({ productId }: { productId: string }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  productId;
  return (
    <Button size="icon" variant="outline" className="p-2 cursor-pointer">
      <FaHeart />
    </Button>
  );
}

export default FavoriteToggleButton;
