import React from "react";
import "./Table.css";
import numeral from "numeral";
import CountUp from "react-countup";
import { Typography } from "@material-ui/core";

function Table({ countries }) {
  return (
    <div className="table">
      {countries.map((country) => (
        <tr>
          <td>{country.country}</td>
          <td>
            <strong>
              <CountUp
                start={0}
                end={country.cases}
                duration={5}
                separator=","
              />
            </strong>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default Table;
