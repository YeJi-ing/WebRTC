import React, { useState } from 'react';
import axios from 'axios';
import '../styles/takeTemp.css';

const TakeTemp = ({ className }) => {
  const [isReady, setIsReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  const [error, setError] = useState(null);

  const takeTemperature = async () => {
    try {
      const response = await axios.get('/picture/snap');
      const receivedValue = response.data.temperature;

      // Log the received value to the console
      console.log('Received Temperature:', receivedValue);

      if (receivedValue >= 30 && receivedValue <= 45) {
        setError(null);
        setTemperature(receivedValue);
      } else {
        alert('유효한 범위(30.0℃~45.0℃)를 벗어났습니다. 재촬영해주세요.');
        setError('');
        setTemperature(null);
      }
    } catch (error) {
      alert('failed');
      console.error('Error taking temperature:', error); // Log error details
    }
  };

  const prepareMeasurement = () => {
    alert('정확한 측정을 위해 마스크와 외투를 벗어주세요');
    setIsReady(true);
    setTemperature(null);
    setError(null);
  };

  return (
    <div className={`takeTemp-component ${className}`}>
      <h3>체온 측정</h3>
      {!isReady && (
        <button onClick={prepareMeasurement}>체온 측정 준비</button>
      )}
      {isReady && (
        <>
          <div className='showTemp'>
            {temperature !== null ? (
              <div>촬영된 체온: {temperature}°C</div>
            ) : (
              <div>촬영 대기 중...</div>
            )}
          </div>
          <button onClick={takeTemperature}>촬영하기</button>
          {error && <div>{error}</div>}
        </>
      )}
    </div>
  );
};

export default TakeTemp;
