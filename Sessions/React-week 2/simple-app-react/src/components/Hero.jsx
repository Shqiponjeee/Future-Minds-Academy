import React from "react";


export default function Hero(props) {


    return (


        <div>
            <main classNameName="row">
                <div className="col">
                    <h1 className="text-center">Welcome to Fall</h1>
                    <div>
                        <img className="img-xxl" src={"assets/images" + props.photo} alt="Fall" />
                    </div>
                </div>
            </main>

        </div>
    )


}