import React from 'react';
import './Styles.css';
import LineChart from '../charts/LineChart'
import BarChart from '../charts/BarChart'

function Home() {
  return (
    <main>
      <div className="main-content">
        
        <div className="main-content-title">
          <h3>Home</h3>
        </div>

        <div className="main-chart-card">

          <div className="chart-card">
            <div className="chart-card-title">
              <h3>Test Chart 1</h3>
            </div>
            <div className="chart-card-body">
              <BarChart />
            </div>
          </div>
          
          <div className="chart-card">
            <div className="chart-card-title">
              <h3>Test Chart 2</h3>
            </div>
            <div className="chart-card-body">
              <LineChart />
            </div>
          </div>
          
          
          <div className="chart-card">
            <div className="chart-card-title">
              <h3>Test Chart 3</h3>
            </div>
            <div className="chart-card-body">
              <LineChart />
            </div>
          </div>

        </div>

        <div className="chart-card">
            <div className="chart-card-title">
              <h3>Test Chart 4</h3>
            </div>
            <div className="chart-card-body">
              <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Ad, molestias, officia eligendi delectus saepe temporibus nihil at distinctio vero a pariatur quia, 
                unde eveniet aspernatur expedita consequuntur voluptatum reiciendis ex?</h2>
              <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Ad, molestias, officia eligendi delectus saepe temporibus nihil at distinctio vero a pariatur quia, 
                unde eveniet aspernatur expedita consequuntur voluptatum reiciendis ex?</h2>
            </div>
        </div>

      </div>
    </main>
  );
}

export default Home;
