import React, {FunctionComponent} from 'react';
import "./home.css"


const Home : FunctionComponent =()=>{
    return(
        <div className={"home__container"}>
            <div className={"left"}>Left</div>
            <div className={"right"}>
                <div className={"header"}>header</div>
            </div>
        </div>
    )

}

export default Home

