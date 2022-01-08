import { Fragment } from "react";
import Header from "../components/header/header.component";
import Footer from "../components/footer/footer.component";

export default function MainLayout(props) {
  return (
    <Fragment>
      <Header />
      <main className="flex-grow">{props.children}</main>
      <Footer />
    </Fragment>
  );
}
