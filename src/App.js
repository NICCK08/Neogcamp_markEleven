import { useState } from "react";
import "./styles.css";
import { Icon } from "react-icons-kit";
import { github } from "react-icons-kit/icomoon/github";
import { linkedin2 } from "react-icons-kit/icomoon/linkedin2";

export default function App() {
  const [dob, setDob] = useState("");
  const [luckyNum, setLuckyNum] = useState("");
  const [luck, setLuck] = useState("");

  function checkLuck() {
    // if (luckyNum <= 0) {
    //   return setLuck("Lucky number must be greater than zero");
    // }
    if (dob && luckyNum > 0) {
      let sum = 0;
      let newDob = dob.replaceAll("-", "");
      for (let digit of newDob) {
        sum = sum + Number(digit);
      }
      sum % luckyNum
        ? setLuck(`${luckyNum} is not that lucky 😕`)
        : setLuck(`${luckyNum} is a lucky number!! 🥳`);
    } else if (!dob || !luckyNum) {
      setLuck("Enter both the fields to check luck 😅");
    } else {
      setLuck("Lucky number must be greater than zero");
    }
  }

  return (
    <div className="App">
      <nav>
        <h1 class="header">
          Is your Birthday Lucky? <span>🤔</span>
        </h1>
      </nav>
      <main>
        <label for="date-of-birth">Date Of Birth</label>
        <input
          type="date"
          name="date-of-birth"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />

        <br />
        <label for="lucky-number">Lucky Number</label>
        <input
          type="number"
          name="lucky-number"
          value={luckyNum}
          onChange={(e) => setLuckyNum(e.target.value)}
          placeholder="Enter your lucky number"
        />

        <br />
        <button onClick={checkLuck}>Am I lucky?</button>

        <h3>{luck}</h3>
        <small>We are still not storing your data.</small>
      </main>
      <footer class="footer">
        <p class="footer-copyright">© Nikhil Savalgi 2022</p>
        <ul class="no-list-style horizontal-list text-center">
          <li>
            <a
              class="link"
              target="_blank"
              href="https://www.linkedin.com/in/nikhil-savalgi/"
            >
              <Icon icon={linkedin2} />
            </a>
          </li>
          <li>
            <a class="link" target="_blank" href="https://github.com/NICCK08">
              <Icon icon={github} />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
