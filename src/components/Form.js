import React from "react";

export default function Form() {
  return (
    <div>
      <div className="container">
        <center>
          <h1>Log-in</h1>
        </center>
        <form action="" className="login">
          <div className="box">
            <label htmlFor="">Role</label>
            <select name="role" id="role-list">
              <option value="-1" selected>
                i.e. Artist, clerk, officer, commsioner
              </option>
              <option value="1">Artist</option>
              <option value="2">Clerk</option>
              <option value="3">Officer</option>
              <option value="3">Commsioner</option>
            </select>
          </div>
          <div className="box">
            <label htmlFor="">User-Code</label>
            <input type="text" placeholder="ex. GUJ123456" className="field" />
          </div>
          <div className="box">
            <label htmlFor="">Password</label>
            <input type="password" placeholder="Password" className="field" />
          </div>
          <center>
            <div className="btn btn-b">Log In</div>
          </center>
        </form>
      </div>
    </div>
  );
}
