"use client";
import { useFsFlag } from "@flagship.io/react-sdk";
import Link from "next/link";

export default function About() {
  const flagBtnColor = useFsFlag("qaBtnColor", "default");
  const flagBtnTitle = useFsFlag("qaBtnTitle", "default");
  const flagMyDutFlag = useFsFlag("myDutFlag", "default");
  return (
    <>
      <div className="row mt-5">
        <div className="col-12">
          <h3 className="text-center">About page</h3>
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
                <td>myDutFlag</td>
                <td>{flagMyDutFlag.getValue()}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Link href="/">Go to Home page</Link>
        </div>
      </div>
    </>
  );
}
