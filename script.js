body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: black;
  font-family: 'Courier New', Courier, monospace;
  color: #00ff00;
}

.calculator {
  background: #111;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 15px #00ff00;
  width: 270px;
}

.display {
  width: 100%;
  height: 50px;
  text-align: right;
  font-size: 1.6rem;
  padding: 10px;
  border: none;
  background-color: #000;
  color: #00ff00;
  border-radius: 6px;
  margin-bottom: 15px;
  box-shadow: inset 0 0 10px #00ff00;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

button {
  padding: 16px;
  font-size: 1.2rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: #000;
  color: #00ff00;
  box-shadow: 0 0 6px #00ff00;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #003300;
}

button.operator {
  background-color: #003300;
  color: #00ff00;
}

button.equal {
  background-color: #00ff00;
  color: black;
  font-weight: bold;
}

button.clear {
  background-color: #990000;
  color: #fff;
  font-weight: bold;
}
