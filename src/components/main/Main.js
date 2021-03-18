import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Main.css";

export const Main = () => {
  const [queries, setQueries] = useState([]);
  const [search, setSearch] = useState("");

  const options = {
    method: "GET",
    url: "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats",
    headers: {
      "x-rapidapi-key": "9da9f853dcmsh86bba916aa656c2p18fc8djsne2562db22529",
      "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then((res) => {
        console.log(res.data.data);
        setQueries(res.data.data.covid19Stats);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filteredQuery = queries.filter((query) =>
    query.country.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div>
      <div className="main">
        <input
          type="search"
          placeholder="Country name"
          className="country-search-input"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="body">
          <ul>
            <div class="table-wrapper">
              <table class="fl-table">
                <thead>
                  <tr>
                    <th>Last Update</th>
                    <th>Country</th>
                    <th>City</th>
                    <th>Province</th>
                    <th>Confirmed</th>
                    <th>Deaths</th>
                    <th>Recovered</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredQuery.map((query) => (
                    <tr>
                      <td>{query.lastUpdate}</td>
                      <td>{query.country}</td>
                      <td>{query.city}</td>
                      <td>{query.province}</td>
                      <td>{query.confirmed}</td>
                      <td className="deaths">{query.deaths}</td>
                      <td className="recovered">{query.recovered}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
