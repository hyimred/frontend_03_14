import { Component } from "react";
import fonok from '../files/profile.png';

export default class About extends Component {
    render() {
        return <div className="Center">
            <h1>Történet</h1>
            <p>A Petrik Webehely-gyárat 2011-ben alapították, hogy az egyre növekvő webes igényeket ki tudja elégíteni.</p>
            <h1>Jelenlegi tagjaink</h1>
            <div className="row">
                <div className="col-6">
                    <ul>
                        <li>Erdős Ildikó</li>
                        <li>Jónás Viola</li>
                        <li>Kató Anna</li>
                        <li>Pintér Koppány</li>
                        <li>Sas Gizi</li>
                    </ul>
                </div>
                <div className="col-6">
                    <img src={fonok} alt="Fotó a főnökről"/>
                </div>
            </div>
        </div>
    }
}