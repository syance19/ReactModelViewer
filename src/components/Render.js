import React, { Component } from "react";
class Render extends Component {
    render() {
        return (
            <div id="card">
                <model-viewer
                    ar ar-modes="webxr scene-viewer quick-look"
                    //ar-placement="wall"
                    camera-controls
                    src="https://res.cloudinary.com/dhq1ehjl0/image/upload/v1651508633/poly_1_txlnsb.glb"
                    //alt="A 3D model of an astronaut"
                    auto-rotate
                />
                <section className="attribution">
                    <span>
                        {/* <h2>BURGUER MASTER 2022</h2> */}
                        <h1>Arte Mono</h1>
                        {/* <span>Grill Comida Urbana</span> */}
                        <br></br>
                        <span>NFT</span>
                    </span>
                    {/* <a class="cc" target="_blank">
                    </a> */}
                </section>
            </div>
        );
    }
}

export default Render;
