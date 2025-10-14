import React from "react";
// ✅ Import all images from src/assets
import logo from "../../assets/icons/BMI-Icons/logo.svg";
import curvedLeft from "../../assets/icons/BMI-Icons/pattern-curved-line-left.svg";
import curvedRight from "../../assets/icons/BMI-Icons/pattern-curved-line-right.svg";
import balancedDiet from "../../assets/images/balanced-diet-img.png";
import eatingIcon from "../../assets/icons/BMI-Icons/icon-eating.svg";
import exerciseIcon from "../../assets/icons/BMI-Icons/icon-exercise.svg";
import sleepIcon from "../../assets/icons/BMI-Icons/icon-sleep.svg";
import genderIcon from "../../assets/icons/BMI-Icons/icon-gender.svg";
import ageIcon from "../../assets/icons/BMI-Icons/icon-age.svg";
import muscleIcon from "../../assets/icons/BMI-Icons/icon-muscle.svg";
import pregnancyIcon from "../../assets/icons/BMI-Icons/icon-pregnancy.svg";
import raceIcon from "../../assets/icons/BMI-Icons/icon-race.svg";

const BmiCalculator = () => {
  return (
    <section className="bmi-calc-section" id="bmi-calc-section">
      {/* Blue Shape */}
      <div className="blue-shape"></div>

      {/* Hero Section of BMI */}
      <div className="calcBmi-hero-section">
        <div className="text-side">
          <img src={logo} alt="logo icon" />
          <h1>Body Mass Index Calculator</h1>
          <p>
            Better understand your weight in relation to your height using our
            BMI calculator. While BMI is not the sole determinant of a healthy
            weight, it offers a valuable starting point to evaluate your overall
            health and well-being.
          </p>
        </div>

        <div className="form-side" id="form-side">
          <h3>Enter your details below</h3>
          <form className="metric-unit" id="metric-unit">
            <div className="metric-container">
              <label htmlFor="m-height">Height</label>
              <input type="number" id="m-height" placeholder="0" />
              <span className="unit">cm</span>
            </div>
            <div className="metric-container">
              <label htmlFor="m-weight">Weight</label>
              <input type="number" id="m-weight" placeholder="0" />
              <span className="unit">kg</span>
            </div>
          </form>

          <div className="result">
            <div className="welcome" id="welcome">
              <h3>Welcome!</h3>
              <p>
                Enter your height and weight and you’ll see your BMI result here
              </p>
            </div>
            <div className="result-number" id="result-numb">
              <p>Your BMI is...</p>
              <span id="result-BMI">00</span>
            </div>
            <div className="result-body-cont" id="result-body">
              <p>
                Your BMI suggests you’re a{" "}
                <span id="range-bmi">healthy weight</span>. Your ideal weight is
                between <span id="result-min-weight">9st 6lbs</span> -
                <span id="result-max-weight">12st 10lbs</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Info Section */}
      <main>
        <img src={curvedLeft} alt="curved left" id="main-shape" />
        <div className="info-BMI">
          <div className="means-result">
            <img src={balancedDiet} alt="balanced diet" id="img-BMI" />
            <div className="info-txt">
              <h2>What your BMI result means</h2>
              <p>
                A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
                Maintaining a healthy weight may lower your chances of
                experiencing health issues later on, such as obesity and type 2
                diabetes. Aim for a nutritious diet with reduced fat and sugar
                content, incorporating ample fruits and vegetables.
                Additionally, strive for regular physical activity, ideally
                about 30 minutes daily for five days a week.
              </p>
            </div>
          </div>

          <div className="info-cards">
            <div className="card-item">
              <img src={eatingIcon} alt="eating icon" />
              <div className="card-txt">
                <h3>Healthy eating</h3>
                <p>
                  Healthy eating promotes weight control, disease prevention,
                  better digestion, immunity, mental clarity, and mood.
                </p>
              </div>
            </div>

            <div className="card-item">
              <img src={exerciseIcon} alt="exercise icon" />
              <div className="card-txt">
                <h3>Regular exercise</h3>
                <p>
                  Exercise improves fitness, aids weight control, elevates mood,
                  and reduces disease risk, fostering wellness and longevity.
                </p>
              </div>
            </div>

            <div className="card-item">
              <img src={sleepIcon} alt="sleep icon" />
              <div className="card-txt">
                <h3>Adequate sleep</h3>
                <p>
                  Sleep enhances mental clarity, emotional stability, and
                  physical wellness, promoting overall restoration and
                  rejuvenation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BMI Limitations */}
        <div className="BMI-limit">
          <img src={curvedRight} alt="curved right" id="limit-shape" />
          <div className="info-limit">
            <h2>Limitations of BMI</h2>
            <p>
              Although BMI is often a practical indicator of healthy weight, it
              is not suited for every person. Specific groups should carefully
              consider their BMI outcomes, and in certain cases, the measurement
              may not be beneficial to use.
            </p>
          </div>

          <div className="limit-cards">
            <div id="gender-card" className="card">
              <div className="img-title">
                <img src={genderIcon} alt="gender icon" />
                <h4>Gender</h4>
              </div>
              <p>
                The development and body fat composition of girls and boys vary
                with age. Consequently, a child's age and gender are considered
                when evaluating their BMI.
              </p>
            </div>

            <div id="age-card" className="card">
              <div className="img-title">
                <img src={ageIcon} alt="age icon" />
                <h4>Age</h4>
              </div>
              <p>
                In aging individuals, increased body fat and muscle loss may
                cause BMI to underestimate body fat content.
              </p>
            </div>

            <div id="muscle-card" className="card">
              <div className="img-title">
                <img src={muscleIcon} alt="muscle icon" />
                <h4>Muscle</h4>
              </div>
              <p>
                BMI may misclassify muscular individuals as overweight or obese,
                as it doesn't differentiate muscle from fat.
              </p>
            </div>

            <div id="pregnant-card" className="card">
              <div className="img-title">
                <img src={pregnancyIcon} alt="pregnancy icon" />
                <h4>Pregnancy</h4>
              </div>
              <p>
                Expectant mothers experience weight gain due to their growing
                baby. Maintaining a healthy pre-pregnancy BMI is advisable to
                minimise health risks for both mother and child.
              </p>
            </div>

            <div id="race-card" className="card">
              <div className="img-title">
                <img src={raceIcon} alt="race icon" />
                <h4>Race</h4>
              </div>
              <p>
                Certain health concerns may affect individuals of some Black and
                Asian origins at lower BMIs than others. To learn more, it is
                advised to discuss this with your GP or practice nurse.
              </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default BmiCalculator;
