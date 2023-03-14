import { Component } from "react";

export default class Contact extends Component {
    render() {
        return <div className="Center">
            <form action="/koszonjuk">
                <div className="form-group">
                    <label htmlFor="email">Email Cím:</label>
                    <input type="email" className="form-control" placeholder="Enter email" id="email" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Üzenet:</label>
                    <textarea className="form-control" id="message" required/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        </div>
    }
}