import ReactDom from "react-dom";
import { Provider } from "react-redux";

import { App } from "./App";
import { rootStore } from "./store/rootStore/rootStore";

ReactDom.render(
  <Provider store={rootStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
