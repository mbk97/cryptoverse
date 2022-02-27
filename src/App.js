import React from "react";
import "./App.css";
import { Layout, Typography, Space } from "antd";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  Navbar,
  Homepage,
  Exchanges,
  Cryptocurrencies,
  CryptoDetail,
  News,
} from "./Components";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/exchanges" element={<Exchanges />} />
                <Route
                  path="/cryptocurrencies"
                  element={<Cryptocurrencies />}
                />
                <Route path="/crypto/:coinId" element={<CryptoDetail />} />
                <Route path="/news" element={<News />} />
              </Routes>
            </div>
          </Layout>
          <div className="footer">
            <Typography.Title level={5} style={{ color: "white" }}>
              Cryptoverse <br />
              All rights reserved
              <Space>
                <Link to="/">Home</Link>
                <Link to="/">Exchanges</Link>
                <Link to="/">News</Link>
              </Space>
            </Typography.Title>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
