import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useGetCryptosQuery } from "../Services/cryptoApi";

const Cryptocurrencies = ({ simplified }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const count = simplified ? 10 : 100;
  const [cryptos, setCryptos] = useState([]);
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);

  useEffect(() => {
    const filteredData = cryptosList?.data.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) {
    return <p>Loading....</p>;
  }

  return (
    <div>
      <div className="search-crypto">
        {!simplified && (
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        )}
      </div>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency, index) => {
          return (
            <Col xs={24} sm={12} lg={6} className="crypto-card" key={index}>
              <Link to={`/crypto/${currency.uuid}`}>
                <Card
                  title={`${currency.rank}.${currency.name}`}
                  extra={
                    <img
                      className="crypto-image"
                      src={currency.iconUrl}
                      alt=""
                    />
                  }
                  hoverable
                >
                  <p>Price: {millify(currency.price)}</p>
                  <p>Market Cap: {millify(currency.marketCap)}</p>
                  <p>Daily Change: {millify(currency.change)}%</p>
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Cryptocurrencies;
