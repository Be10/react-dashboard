import React from 'react';
import './Styles.css';
import BarChart from '../charts/DBChart1';

function Home() {
  return (
    <main>
      <div className="main-content">
        
        <div className="main-content-title">
          <h2>Home</h2>
        </div>

        <div className="main-chart-card">

          <div className="chart-card">
            <div className="chart-card-title">
              <h3>Test Chart</h3>
            </div>
            <div className="chart-card-body">
              <BarChart />
            </div>
          </div>
          
          <div className="chart-card">
            <div className="chart-card-title">
              <h3>Test Chart</h3>
            </div>
            <div className="chart-card-body">
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}

export default Home;
