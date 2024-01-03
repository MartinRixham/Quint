import { BindingRoot } from "Datum";
import fetchPage from "./fetchPage";
import App from "~/js/App";

new BindingRoot(new App(fetchPage));
