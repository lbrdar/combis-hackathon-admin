import React from 'react';
import { CircularProgress } from '@material-ui/core';

const DATA = {
  '0-': {
    min: 38,
    max: 78,
    amount: 70
  },
  '0+': {
    min: 115,
    max: 240,
    amount: 200
  },
  'A-': {
    min: 46,
    max: 96,
    amount: 71
  },
  'A+': {
    min: 100,
    max: 210,
    amount: 200
  },
  'B-': {
    min: 38,
    max: 82,
    amount: 40
  },
  'B+': {
    min: 23,
    max: 50,
    amount: 45
  },
  'AB-': {
    min: 8,
    max: 18,
    amount: 20
  },
  'AB+': {
    min: 16,
    max: 36,
    amount: 17
  }
};

class Home extends React.Component {

  render() {
    return (
      <div>
        {Object.keys(DATA).map(type => {
          let value = DATA[type].amount > DATA[type].min ? (DATA[type].amount - DATA[type].min) / (DATA[type].max - DATA[type].min) : 0;
          if (DATA[type].amount > DATA[type].max) {
            value = 100
          }

          // const diffFromMid = Math.abs(DATA[type].amount - (DATA[type].max - DATA[type].min));


          /*const color = (DATA[type].amount > DATA[type].max || DATA[type].amount < DATA[type].min)
            ? 'black'
            : `rgb(${255 * diffFromMid / (DATA[type].max - DATA[type].min)}, 0, 0)`;*/

          return (
            <div style={styles.bloodTypeWrapper}>
              <CircularProgress
                variant="static"
                value={100}
                thickness={10}
                size={140}
                style={{ position: 'absolute', color: '#eeeeee', left: 0 }}
              />
              <CircularProgress
                variant="static"
                value={value * 100}
                thickness={10}
                size={140}
                style={{ color: 'red' }}
              />
              <p style={styles.bloodType}>{type}</p>
              <p style={styles.bloodAmount}>{DATA[type].amount}</p>
            </div>
          )
        })}

      </div>
    );
  }
}

const styles = {
  bloodTypeWrapper: {
    position: 'relative',
    display: 'inline-block',
    margin: 50
  },
  bloodType: {
    position: 'absolute',
    top: -10,
    fontSize: 50,
    width: '100%',
    textAlign: 'center'
  },
  bloodAmount: {
    fontSize: 50,
    margin: 0,
    textAlign: 'center'
  }
};

export default Home;
