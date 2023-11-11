import { useState } from "react";
import BgSidebar from "./assets/images/bg-sidebar-mobile.svg";
import BgDesktopSidebar from "./assets/images/bg-sidebar-desktop.svg";
import styled from "styled-components";
import ArcadeIcon from "./assets/images/icon-arcade.svg";
import AdvancedIcon from "./assets/images/icon-advanced.svg";
import ProIcon from "./assets/images/icon-pro.svg";
import Checkmark from "./assets/images/icon-checkmark.svg";
import ThankYou from "./assets/images/icon-thank-you.svg";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  @media screen and (min-width: 1000px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Container2 = styled.div`
  @media screen and (min-width: 1000px) {
    background-color: hsl(0, 0%, 100%);
    display: flex;
    border-radius: 20px;
    box-shadow: 0px 10px 50px hsl(229, 24%, 87%);
    overflow: hidden;
  }
`;

const Navigation = styled.div`
  font-family: Ubuntu;

  .desktop {
    display: none;
  }

  .img {
    width: 100%;
    height: 0px;
    overflow: visible;

    img {
      width: 100%;
      height: auto;
    }
  }

  .pages {
    display: flex;
    width: 100%;
    height: 90px;
    justify-content: center;
    align-items: center;

    .info {
      display: none;
    }

    div {
      margin-left: 5px;
      margin-right: 5px;
      font-weight: 700;
      border: 2px solid hsl(0, 0%, 100%);
      color: hsl(0, 0%, 100%);
      border-radius: 30px;
      width: 35px;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .selected {
      background-color: hsl(206, 94%, 87%);
      border: 2px solid hsl(206, 94%, 87%);
      color: hsl(213, 96%, 18%);
    }
  }

  @media screen and (min-width: 1000px) {
    position: relative;
    margin: 10px;
    margin-bottom: 6px;

    .desktop {
      display: block;
    }

    .img {
      display: none;
    }

    .pages {
      display: block;
      position: absolute;
      top: 30px;
      left: 20px;

      .page {
        margin-bottom: 25px;
        display: flex;

        .info {
          display: block;
          margin-left: 10px;

          span {
            display: block;
          }

          .step {
            color: hsl(228, 100%, 84%);
            font-size: small;
            margin-bottom: 3px;
          }

          .description {
            color: hsl(0, 0%, 100%);
            font-weight: 700;
          }
        }
      }
    }
  }
`;

const Form = styled.div`
  padding: 10px;
  position: relative;
  flex: 1;

  @media screen and (min-width: 1000px) {
    padding-left: 50px;
    padding-right: 50px;
  }
`;

const Bottom = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  display: flex;
  justify-content: space-between;
  width: calc(100% - 20px);
  padding: 10px;
  background: white;
  font-family: Ubuntu;
  align-items: center;

  button {
    background: hsl(213, 96%, 18%);
    color: white;
    padding: 15px;
    padding-top: 12px;
    padding-bottom: 12px;
    border: none;
    border-radius: 5px;
    font-weight: 700;
    font-size: 13px;
    cursor: pointer;

    &:hover {
      background-color: hsla(213, 96%, 18%, 0.8);
    }

    &:disabled {
      color: hsla(213, 96%, 18%, 0.8);
      background-color: hsl(231, 11%, 63%);
    }
  }

  .invalid {
  }

  .final {
    background: hsl(243, 100%, 62%);

    &:hover {
      background: hsla(243, 100%, 62%, 0.5);
    }
  }

  div {
    color: hsl(231, 11%, 63%);
    cursor: pointer;
  }

  @media screen and (min-width: 1000px) {
    position: unset;
    flex: 0;
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 35px;
    width: calc(100% - 100px);
  }
`;

const Toggle = styled.div`
  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 12px;
    width: 12px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input + .slider {
    background-color: hsl(213, 96%, 18%);
  }

  input:checked + .slider {
    background-color: hsl(213, 96%, 18%);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px hsl(213, 96%, 18%);
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

const Form1 = styled.div`
  background-color: white;
  padding: 25px;
  padding-top: 35px;
  padding-bottom: 30px;
  font-family: Ubuntu;
  border-radius: 10px;
  box-shadow: 0px 50px 20px -50px hsl(229, 24%, 87%);

  h2 {
    color: hsl(213, 96%, 18%);
    font-weight: 700;
  }

  p {
    color: hsl(231, 11%, 63%);
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: 400;
  }

  form {
    label {
      margin-top: 15px;
      margin-bottom: 3px;
      color: hsl(213, 96%, 18%);
      display: flex;
      justify-content: space-between;

      .invalid {
        color: hsl(354, 84%, 57%);
        font-size: small;
        font-weight: 400;
      }
    }

    input {
      height: 40px;
      padding-left: 15px;
      width: calc(100% - 15px);
      border: 1px solid hsl(229, 24%, 87%);
      border-radius: 5px;
      font-weight: 700;
      color: hsl(213, 96%, 18%);

      &:focus,
      &:hover {
        outline: none;
        border: 1px solid hsl(243, 100%, 62%);
      }
    }

    .inputinvalid {
      border-color: hsl(354, 84%, 57%);
    }
  }

  @media screen and (min-width: 1000px) {
    box-shadow: none;
    flex: 1;
    width: 416px;
  }
`;

const Form2 = styled.div`
  background-color: white;
  padding: 25px;
  padding-top: 35px;
  padding-bottom: 30px;
  font-family: Ubuntu;
  border-radius: 10px;
  box-shadow: 0px 50px 20px -50px hsl(229, 24%, 87%);

  h2 {
    color: hsl(213, 96%, 18%);
    font-weight: 700;
  }

  p {
    color: hsl(231, 11%, 63%);
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: 400;
  }

  .plans {
    margin-top: 25px;

    .plan {
      display: flex;
      align-items: center;
      height: 80px;
      padding-left: 20px;
      border: 1px solid lightgray;
      margin-top: 10px;
      border-radius: 5px;
      cursor: pointer;

      .details {
        padding-left: 15px;

        .type {
          color: hsl(213, 96%, 18%);
          font-weight: 700;
        }

        .fee {
          color: hsl(231, 11%, 63%);
          font-size: small;
          font-weight: 500;
          margin-top: 5px;
        }

        small {
          color: hsl(213, 96%, 18%);
          font-size: x-small;
        }
      }
    }

    .plan:hover {
      border-color: hsl(243, 100%, 62%);
    }

    .selected {
      border-color: hsl(243, 100%, 62%);
      background-color: hsla(243, 100%, 62%, 0.1);
    }
  }

  .toggle {
    background-color: hsl(217, 100%, 97%);
    display: flex;
    justify-content: center;
    padding: 15px;
    border-radius: 5px;
    margin-top: 20px;

    div {
      margin-left: 10px;
      margin-right: 10px;
      color: hsl(231, 11%, 63%);
      font-weight: 700;
    }

    .selected {
      color: hsl(213, 96%, 18%);
    }
  }

  @media screen and (min-width: 1000px) {
    box-shadow: none;
    flex: 1;

    .plans {
      display: flex;
      justify-content: space-between;
      width: 416px;

      .plan {
        display: block;
        padding: 10px;
        width: 100px;
        height: unset;

        .details {
          margin-top: 38px;
          padding: unset;
        }
      }
    }

    .toggle {
      margin-top: 30px;
    }
  }
`;

const Form3 = styled.div`
  background-color: white;
  padding: 25px;
  padding-top: 35px;
  padding-bottom: 30px;
  font-family: Ubuntu;
  border-radius: 10px;
  box-shadow: 0px 50px 20px -50px hsl(229, 24%, 87%);

  h2 {
    color: hsl(213, 96%, 18%);
    font-weight: 700;
  }

  p {
    color: hsl(231, 11%, 63%);
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: 400;
  }

  label {
    display: flex;
    align-items: center;
    height: fit-content;
    padding: 15px;
    border: 1px solid hsl(229, 24%, 87%);
    margin-top: 10px;
    border-radius: 5px;
    justify-content: space-between;
    cursor: pointer;
    width: calc(100% - 30px);
    position: relative;

    .middle {
      flex: 1;
      margin-left: 15px;

      .name {
        color: hsl(213, 96%, 18%);
        font-weight: 700;
      }

      .details {
        color: hsl(231, 11%, 63%);
        font-size: small;
        font-weight: 400;
      }
    }

    .fee {
      color: hsl(243, 100%, 62%);
      font-size: small;
    }
  }

  input {
    display: none;
  }

  label:hover {
    border-color: hsl(243, 100%, 62%);
  }

  label:before {
    content: "";
    width: 20px;
    height: 20px;
    background-color: white;
    border: 1px solid hsl(229, 24%, 87%);
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input:checked + label:before {
    content: url(${Checkmark});
    border: 1px solid hsl(243, 100%, 62%);
    background-color: hsl(243, 100%, 62%);
  }

  .selected {
    border-color: hsl(243, 100%, 62%);
    background-color: hsla(243, 100%, 62%, 0.1);
  }

  @media screen and (min-width: 1000px) {
    box-shadow: none;
    width: 416px;
  }
`;

const Form4 = styled.div`
  background-color: white;
  padding: 25px;
  padding-top: 35px;
  padding-bottom: 30px;
  font-family: Ubuntu;
  border-radius: 10px;
  box-shadow: 0px 50px 20px -50px hsl(229, 24%, 87%);

  h2 {
    color: hsl(213, 96%, 18%);
    font-weight: 700;
  }

  p {
    color: hsl(231, 11%, 63%);
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: 400;
  }

  .breakdown {
    background-color: hsl(231, 100%, 99%);
    padding: 20px;
    border-radius: 10px;

    .plan {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 10px;
      border-bottom: 1px solid hsl(229, 24%, 87%);

      u {
        color: hsl(231, 11%, 63%);
        font-size: small;
        cursor: pointer;

        &:hover {
          color: hsl(243, 100%, 62%);
        }
      }

      .name,
      .price {
        color: hsl(213, 96%, 18%);
        font-weight: 700;
      }
    }

    .addon {
      padding-top: 10px;
      padding-bottom: 5px;
      display: flex;
      justify-content: space-between;
      font-weight: 400;
      font-size: small;

      .name {
        color: hsl(231, 11%, 63%);
      }

      .price {
        color: hsl(213, 96%, 18%);
      }
    }
  }

  .total {
    padding: 20px;
    display: flex;
    justify-content: space-between;

    .description {
      color: hsl(231, 11%, 63%);
      font-weight: 400;
      font-size: small;
    }

    .price {
      font-weight: 700;
      color: hsl(243, 100%, 62%);
    }
  }

  @media screen and (min-width: 1000px) {
    width: 416px;
    box-shadow: none;
  }
`;

const Form5 = styled.div`
  background-color: white;
  padding: 25px;
  padding-top: 70px;
  padding-bottom: 70px;
  font-family: Ubuntu;
  border-radius: 10px;
  box-shadow: 0px 50px 20px -50px hsl(229, 24%, 87%);

  h2 {
    color: hsl(213, 96%, 18%);
    font-weight: 700;
  }

  p {
    color: hsl(231, 11%, 63%);
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: 400;
  }

  img {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1000px) {
    box-shadow: none;
    width: 416px;
    height: 100%;
    padding: unset;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [page, setPage] = useState(1);
  const [allMonthly, setAllMonthly] = useState(true);
  const [planSelect, setPlanSelect] = useState(0);
  const [plans] = useState([
    {
      type: "Arcade",
      price: { monthly: "$9/mo", yearly: "$90/yr" },
      value: { monthly: 9, yearly: 90 },
      icon: ArcadeIcon,
    },
    {
      type: "Advanced",
      price: { monthly: "$12/mo", yearly: "$120/yr" },
      value: { monthly: 12, yearly: 120 },
      icon: AdvancedIcon,
    },
    {
      type: "Pro",
      price: { monthly: "$15/mo", yearly: "$150/yr" },
      value: { monthly: 15, yearly: 150 },
      icon: ProIcon,
    },
  ]);
  const [addonsState, setAddonsState] = useState([false, false, false]);
  const [addons] = useState([
    {
      name: "Online services",
      details: "Access to multiplayer games",
      price: {
        yearly: "+$10/yr",
        monthly: "+$1/mo",
      },
      value: { monthly: 1, yearly: 10 },
    },
    {
      name: "Larger storage",
      details: "Extra 1TB of cloud save",
      price: {
        yearly: "+$20/yr",
        monthly: "+$2/mo",
      },
      value: { monthly: 2, yearly: 20 },
    },
    {
      name: "Customizable profile",
      details: "Custom theme on your profile",
      price: {
        yearly: "+$20/yr",
        monthly: "+$2/mo",
      },
      value: { monthly: 2, yearly: 20 },
    },
  ]);

  const pageDescription = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];

  function toggleAddon(i) {
    const newState = [...addonsState];
    newState[i] = !newState[i];
    setAddonsState(newState);
  }

  function valid(text) {
    return text.length > 0;
  }

  function total() {
    if (allMonthly) {
      let result = plans[planSelect].value.monthly;
      for (let addon of addons.filter((_, i) => addonsState[i])) {
        result += addon.value.monthly;
      }
      return result;
    } else {
      let result = plans[planSelect].value.yearly;
      for (let addon of addons.filter((_, i) => addonsState[i])) {
        result += addon.value.yearly;
      }
      return result;
    }
  }

  const pages = {
    1: (
      <Form1>
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number.</p>
        <form>
          <label htmlFor="name">
            <small>Name</small>
            <div className="invalid">
              {!valid(name) ? "This field is required" : ""}
            </div>
          </label>
          <input
            className={`${!valid(name) ? "inputinvalid" : ""}`}
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            type="text"
            id="name"
            placeholder="e.g. Stephen King"
          />
          <label htmlFor="email">
            <small>Email Address</small>
            <div className="invalid">
              {!valid(email) ? "This field is required" : ""}
            </div>
          </label>
          <input
            type="email"
            className={`${!valid(email) ? "inputinvalid" : ""}`}
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            id="email"
            placeholder="e.g. stephenking@lorem.com"
          />
          <label htmlFor="phone">
            <small>Phone Number</small>
            <div className="invalid">
              {!valid(phone) ? "This field is required" : ""}
            </div>
          </label>
          <input
            value={phone}
            className={`${!valid(phone) ? "inputinvalid" : ""}`}
            onChange={(e) => setPhone(e.currentTarget.value)}
            type="tel"
            id="phone"
            placeholder="e.g. +1 234 567 890"
          />
        </form>
      </Form1>
    ),
    2: (
      <Form2 className="container">
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>
        <div className="plans">
          {plans.map((v, i) => (
            <div
              key={i}
              className={`plan ${planSelect === i ? "selected" : ""}`}
              onClick={() => setPlanSelect(i)}
            >
              <img src={v.icon} alt="icon" />
              <div className="details">
                <div className="type">{v.type}</div>
                <div className="fee">
                  {allMonthly ? v.price.monthly : v.price.yearly}
                </div>
                <small>{!allMonthly ? "2 months free" : ""}</small>
              </div>
            </div>
          ))}
        </div>
        <div className="toggle">
          <div className={allMonthly ? "selected" : ""}>Monthly</div>
          <Toggle>
            <label class="switch">
              <input
                type="checkbox"
                onChange={() => setAllMonthly(!allMonthly)}
                checked={!allMonthly}
              />
              <span class="slider round"></span>
            </label>
          </Toggle>
          <div className={!allMonthly ? "selected" : ""}>Yearly</div>
        </div>
      </Form2>
    ),
    3: (
      <Form3 className="container">
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
        <div className="add-ons">
          {addons.map((v, i) => (
            <>
              <input
                type="checkbox"
                id={`checkbox${i}`}
                onChange={() => toggleAddon(i)}
                checked={addonsState[i]}
              />
              <label
                htmlFor={`checkbox${i}`}
                key={i}
                className={`${addonsState[i] ? "selected" : ""}`}
              >
                <div className="middle">
                  <div className="name">{v.name}</div>
                  <div className="details">{v.details}</div>
                </div>
                <div className="fee">
                  {allMonthly ? v.price.monthly : v.price.yearly}
                </div>
              </label>
            </>
          ))}
        </div>
      </Form3>
    ),
    4: (
      <Form4>
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>
        <div className="breakdown">
          <div className="plan">
            <div>
              <div className="name">
                {plans[planSelect].type} ({allMonthly ? "Monthly" : "Yearly"})
              </div>
              <u>Change</u>
            </div>
            <div className="price">
              {allMonthly
                ? plans[planSelect].price.monthly
                : plans[planSelect].price.yearly}
            </div>
          </div>
          {addons
            .filter((_, i) => addonsState[i])
            .map((v, i) => (
              <div key={i} className="addon">
                <div className="name">{v.name}</div>
                <div className="price">
                  {allMonthly ? v.price.monthly : v.price.yearly}
                </div>
              </div>
            ))}
        </div>
        <div className="total">
          <div className="description">
            Total ({allMonthly ? "per month" : "per year"})
          </div>
          <div className="price">
            ${total()}/{allMonthly ? "mo" : "yr"}
          </div>
        </div>
      </Form4>
    ),
    5: (
      <Form5>
        <center>
          <img src={ThankYou} alt="thank you" />
          <h2>Thank you!</h2>
          <p>
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </center>
      </Form5>
    ),
  };

  return (
    <Container>
      <Container2>
        <Navigation>
          <div className="desktop">
            <img src={BgDesktopSidebar} alt="desktop sidebar" />
          </div>
          <div className="img">
            <img src={BgSidebar} alt="mobile sidebar" />
          </div>
          <div className="pages">
            {[1, 2, 3, 4, 5]
              .filter((v) => (page === 5 && v !== 4) || (page !== 5 && v !== 5))
              .map((v, i) => (
                <span className="page">
                  <div key={i} className={page === v ? "selected" : ""}>
                    {i + 1}
                  </div>
                  <span className="info">
                    <span className="step">STEP {i + 1}</span>
                    <span className="description">{pageDescription[i]}</span>
                  </span>
                </span>
              ))}
          </div>
        </Navigation>
        <FormSection>
          <Form>{pages[page] !== undefined ? pages[page] : ""}</Form>
          {page < 5 && (
            <Bottom>
              <div onClick={() => setPage(page - 1)}>
                {page > 1 ? "Go back" : ""}
              </div>
              <button
                className={`${page === 4 ? "final" : ""}`}
                disabled={!valid(name) || !valid(email) || !valid(phone)}
                onClick={() => setPage(page + 1)}
              >
                {page < 4 ? "Next Step" : "Confirm"}
              </button>
            </Bottom>
          )}
        </FormSection>
      </Container2>
    </Container>
  );
}

export default App;
