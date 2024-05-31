"use client";
import { useFlagship, useFsFlag } from "@flagship.io/react-sdk";
import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isQa, setIsQa] = useState(false);
  const flagBtnColor = useFsFlag("qaBtnColor", "default");
  const flagBtnTitle = useFsFlag("qaBtnTitle", "default");
  const flatBackground = useFsFlag("background", "default");
  const flag1 = useFsFlag("Flag 1", "default");
  const flagMyFlag = useFsFlag("my_flag", "default");

  const fs = useFlagship();

  const handleIsQaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    fs.updateContext({ isQA: checked });
    fs.fetchFlags().then(() => {
      setIsQa(checked);
    });
  };

  return (
    <>
      <div className="row mt-5">
        <div className="col-12">
          <h3 className="text-center">Home page</h3>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12">
          <h4>Visitor context</h4>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              checked={isQa}
              onChange={handleIsQaChange}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              IsQa
            </label>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12">
          <h4>Flags read in the current page:</h4>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Flag key</th>
                <th scope="col">Flag Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>btnColor</td>
                <td>{flagBtnColor.getValue()}</td>
              </tr>
              <tr>
                <td>btnTitle</td>
                <td>{flagBtnTitle.getValue()}</td>
              </tr>
              <tr>
                <td>background</td>
                <td>{flatBackground.getValue()}</td>
              </tr>
              <tr>
                <td>flag 1</td>
                <td>{flag1.getValue()}</td>
              </tr>
              <tr>
                <td>my_flag</td>
                <td>{flagMyFlag.getValue()}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Link href="/about">Go to About page</Link>
        </div>
      </div>
    </>
  );
}
