import { React } from "react";
import { useState } from "react";

import "./mainNavigationStyle.css";

//  Web page title
const navTitle = "State Use";

//  The submenu
function Submenu(){

    //  The state
    const [ idname, setIdname ] = useState(0);

    return (
        <div>

            <button 
                id="btnDrpDown"
                onClick= {
                    
                    () => {

                        if(idname == "submenu_ison") {
                            setIdname("submenu_isoff");
                        } else {
                            setIdname("submenu_ison");
                        }                       

                    }

                }
            > 
                ...
            </button>

            <div className={ idname }>
                <a className="subMenuLink" href="">
                    Sub menu option 1
                </a>
                <a className="subMenuLink"  href="">
                    Sub menu option 2
                </a>
                <a className="subMenuLink"  href="">
                    Sub menu option 3
                </a>
                <a className="subMenuLink"  href="">
                    Sub menu option 4
                </a>
            </div>

        </div>

    );
}

//  THe main title link
function MainTitleLink(){
    return (
        <a id="mainTitleLink" href="">
            <h1>{ navTitle }</h1>
        </a>
    );
}

//  The main component
function Navigation(){

    return (
        <nav>
            <MainTitleLink />
            <Submenu />
        </nav>
    );
}

export { Navigation };