import React from "react";
import level1Tense from "../Img/ProcedureImages/level-1-1-tense.png";
import level1actsent from "../Img/ProcedureImages/level-1-2-actsent.png";
import level1passsent from "../Img/ProcedureImages/level-1-3-passsent.png";
import level1feedback from "../Img/ProcedureImages/level-1-4-feedback.png";
import level2passsent from "../Img/ProcedureImages/level-2-2-passsent.png";
import level2actsent from "../Img/ProcedureImages/level-2-3-actsent.png";
import level2feedback from "../Img/ProcedureImages/level-1-4-feedback.png";
import selectLevel from "../Img/ProcedureImages/selectLevel.png";

const ProcedureMidContent = () => {
  return (
    <div
      className="py-3"
      style={{
        overflow: "auto",
        width: "100%",
        paddingRight: "10px",
        fontSize: "calc(.6rem + .4vw)",
      }}
    >
      <div className="fw-bolder">Procedure:</div>
      <ul>
        There are two levels in the activity. Select the level to start with the
        activity.
      </ul>
      <ol type="A">
        <li>
          <b>Level-1</b> : Active voice to Passive voice
        </li>
        <ol>
          <li>Select the desired tense.</li>

          <div className="m-2 col">
            <div style={{ position: "relative", display: "inline-block" }}>
              <img
                className="img-fluid"
                style={{ border: "1px solid black", display: "block" }}
                src={level1Tense}
                alt="logo"
              />
              <div
                className="fw-bolder text-center"
                style={{
                  width: "100%",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  padding: "4px 0",
                }}
              >
                Fig. 1: Select tense
              </div>
            </div>
          </div>

          <li>The sentence displayed is in the active voice.</li>

          <div className="m-2 col">
            <div style={{ position: "relative", display: "inline-block" }}>
              <img
                className="img-fluid"
                style={{ border: "1px solid black", display: "block" }}
                src={level1actsent}
                alt="logo"
              />
              <div
                className="fw-bolder text-center"
                style={{
                  width: "100%",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  padding: "4px 0",
                }}
              >
                Fig. 2: Sentence in Active voice
              </div>
            </div>
          </div>

          <li>
            Now, rearrange the given words below to construct the corresponding
            Passive voice of the given sentence.​
          </li>

          <div className="m-2 col">
            <div style={{ position: "relative", display: "inline-block" }}>
              <img
                className="img-fluid"
                style={{ border: "1px solid black", display: "block" }}
                src={level1passsent}
                alt="logo"
              />
              <div
                className="fw-bolder text-center"
                style={{
                  width: "100%",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  padding: "4px 0",
                }}
              >
                Fig. 3: Shuffeled words of sentence in passive voice
              </div>
            </div>
          </div>

          <li>Click on "Hints" to view hints.​</li>
          <li>
            Click on "Check" to check whether the Passive voice is properly
            constructed and check the feedback displayed below.​
          </li>

          <div className="m-2 col">
            <div style={{ position: "relative", display: "inline-block" }}>
              <img
                className="img-fluid"
                style={{ border: "1px solid black", display: "block" }}
                src={level1feedback}
                alt="logo"
              />
              <div
                className="fw-bolder text-center"
                style={{
                  width: "100%",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  padding: "4px 0",
                }}
              >
                Fig. 4: Feedback of constructed passive voice sentence
              </div>
            </div>
          </div>

          <li>Click on "Next" to view the next sentence.​</li>
          <li>
            If you are unable to solve the question, click on “Show answer” to
            see the answer, but “Show answer” it is visible only if you answer
            it thrice incorrectly.​
          </li>
          <li>
            Click on "Select Level" buttion to switch between the levels as
            shown in Fig. 5.​
          </li>

          <div className="m-2 col">
            <div style={{ position: "relative", display: "inline-block" }}>
              <img
                className="img-fluid"
                style={{ border: "1px solid black", display: "block" }}
                src={selectLevel}
                alt="logo"
              />
              <div
                className="fw-bolder text-center"
                style={{
                  width: "100%",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  padding: "4px 0",
                }}
              >
                Fig. 5: Select Level
              </div>
            </div>
          </div>
        </ol>
        <br />
        <li>
          <b>Level-2 </b> : Passive voice to Active voice
        </li>
        <ol>
          <li>Select the desired tense.</li>

          <div className="m-2 col">
            <div style={{ position: "relative", display: "inline-block" }}>
              <img
                className="img-fluid"
                style={{ border: "1px solid black", display: "block" }}
                src={level1Tense}
                alt="logo"
              />
              <div
                className="fw-bolder text-center"
                style={{
                  width: "100%",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  padding: "4px 0",
                }}
              >
                Fig. 6: Select tense
              </div>
            </div>
          </div>

          <li>The sentence displayed is in passive voice.</li>

          <div className="m-2 col">
            <div style={{ position: "relative", display: "inline-block" }}>
              <img
                className="img-fluid"
                style={{ border: "1px solid black", display: "block" }}
                src={level2passsent}
                alt="logo"
              />
              <div
                className="fw-bolder text-center"
                style={{
                  width: "100%",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  padding: "4px 0",
                }}
              >
                Fig. 7: Sentence in Passive voice
              </div>
            </div>
          </div>

          <li>
            Now, rearrange the given words below to construct the corresponding
            Active voice of the given sentence.​
          </li>

          <div className="m-2 col">
            <div style={{ position: "relative", display: "inline-block" }}>
              <img
                className="img-fluid"
                style={{ border: "1px solid black", display: "block" }}
                src={level2actsent}
                alt="logo"
              />
              <div
                className="fw-bolder text-center"
                style={{
                  width: "100%",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  padding: "4px 0",
                }}
              >
                Fig. 8: Shuffeled words of sentence in active voice
              </div>
            </div>
          </div>

          <li>Click on "Hints" to view hints.​</li>
          <li>
            Click on "Submit" to check whether the Active voice is properly
            constructed and check the feedback displayed below.​
          </li>

          <div className="m-2 col">
            <div style={{ position: "relative", display: "inline-block" }}>
              <img
                className="img-fluid"
                style={{ border: "1px solid black", display: "block" }}
                src={level2feedback}
                alt="logo"
              />
              <div
                className="fw-bolder text-center"
                style={{
                  width: "100%",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  padding: "4px 0",
                }}
              >
                Fig. 9: Feedback of constructed active voice sentence
              </div>
            </div>
          </div>

          <li>Click on "Next" to view the next sentence.​</li>
          <li>
            If you are unable to solve the question, click on “Show answer” to
            see the answer, but “Show answer” it is visible only if you answer
            it thrice incorrectly.​
          </li>
          <li>
            Click on "Select Level" buttion to switch between the levels as
            shown in Fig. 10.
          </li>

          <div className="m-2 col">
            <div style={{ position: "relative", display: "inline-block" }}>
              <img
                className="img-fluid"
                style={{ border: "1px solid black", display: "block" }}
                src={selectLevel}
                alt="logo"
              />
              <div
                className="fw-bolder text-center"
                style={{
                  width: "100%",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  padding: "4px 0",
                }}
              >
                Fig. 10: Select level
              </div>
            </div>
          </div>
        </ol>
      </ol>
    </div>
  );
};

export default ProcedureMidContent;
