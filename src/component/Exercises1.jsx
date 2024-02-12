import React, { useState } from 'react';

function Exercises1() {
  return (
    <>
      <First />
      <Second />
      <Third />
      <Location />
      <Five />
      <Six />
      <Change />
    </>
  );
}

export default Exercises1;

const First = () => {
  return (
    <section>
      <h2>Задание № 1</h2>
      <h3 className="title">Hello</h3>
      <p className="subtext">Hello World</p>
    </section>
  );
};
const Second = () => {
  return (
    <section>
      <h2>Задание № 2</h2>
      <b className="bold1">Местами</b>
      <b id="bold2">Поменяй нас</b>
    </section>
  );
};
const Third = () => {
  const styles = {
    backgroundColor: 'darkslateblue',
    padding: 10,
    color: 'white',
    borderRadius: '10px',
    boxShadow: '0px 5px 5px -5px rgba(34, 60, 80, 0.6',
    marginLeft: 20,
  };
  return (
    <section>
      <h2>Задание № 3</h2>
      <span style={styles} id="cool">
        Хочу быть крутым
      </span>
    </section>
  );
};

export const Location = () => {
  const [location, setLocation] = useState('');
  const right = function () {
    setLocation('right');
  };
  const left = function (string) {
    setLocation('left');
  };
  const center = function () {
    setLocation('center');
  };
  return (
    <div>
      <p style={{ textAlign: location }}>Text</p>
      <button onClick={left}>left</button>
      <button onClick={center}>center</button>
      <button onClick={right}>right</button>
    </div>
  );
};

function Five() {
  const [color, setColor] = useState('transparent');

  function paint() {
    //color='blue'
    setColor('blue');
  }
  return (
    <section>
      <h2>Задание № 5</h2>
      <p className="color">BLUE</p>
      <button style={{ backgroundColor: color }} onClick={paint}>
        Покрасить кнопку
      </button>
    </section>
  );
}

function Six() {
  const [size, setsize] = useState(120);
  const [inputValue, setinputValue] = useState('');
  function changeSize() {
    setsize(inputValue);
  }
  function inputChange(arg) {
    setinputValue(arg.target.value);
  }
  return (
    <section>
      <h2>Задание № 6</h2>
      <input
        onChange={(event) => inputChange(event)}
        value={inputValue}
        type="number"
        placeholder="ширина"
      />
      <button onClick={changeSize}>Изменить</button>
      <br />
      <img
        src="https://image.winudf.com/v2/image/Y29tLmFuZHJvbW8uZGV2Njg3MTU3LmFwcDc0MDQzN19zY3JlZW5fNF8xNTE3OTc0NjUzXzA3MQ/screen-4.jpg?fakeurl=1&type=.jpg"
        width={size}
      />
    </section>
  );
}

export const Change = () => {
  const [change, setChange] = useState('');
  const hide = () => {
    //change=>hide
    setChange('hide');
  };
  const makeRound = () => {
    setChange('circle');
  };
  const makeSmall = () => {
    setChange('small');
  };
  return (
    <div>
      <button className="hide" onClick={hide}>
        Невидимый
      </button>
      <button className="circle" onClick={makeRound}>
        Круглый
      </button>
      <button className="small" onClick={makeSmall}>
        Маленький
      </button>
      <div className={`box box-${change}`}></div>
    </div>
  );
};
