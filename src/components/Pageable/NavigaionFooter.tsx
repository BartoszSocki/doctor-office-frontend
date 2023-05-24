import type ICurrentUrl from "@Interfaces/ICurrentUrl";
import type IPageableLinks from "@Interfaces/IPageableLinks";
import { Link } from "react-router-dom";

import "./style.css";

const NavigationFooter = (props: IPageableLinks & ICurrentUrl) => {
  const { url } = props;
  const first = props.first?.href.split("?").at(1);
  const next = props.next?.href.split("?").at(1);
  const prev = props.prev?.href.split("?").at(1);
  const last = props.last?.href.split("?").at(1);

  return (
    <div className="page-links">
      {first != null ? <Link to={`${url}?${first}`}>{"<<"} first</Link> : null}
      {prev != null ? <Link to={`${url}?${prev}`}>{"<"} prev</Link> : null}
      {next != null ? <Link to={`${url}?${next}`}>next {">"}</Link> : null}
      {last != null ? <Link to={`${url}?${last}`}>last {">>"}</Link> : null}
    </div>
  );
};

export default NavigationFooter;
