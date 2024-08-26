import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Cart from "@/components/Cart/Cart";

export const metadata: Metadata = {
  title: "Cart items",
  description:
    "This is Radio App Cart items page",
};

const CartPage = () => {
  return (
    <DefaultLayout>
      <Cart/>
    </DefaultLayout>
  );
};

export default CartPage;
