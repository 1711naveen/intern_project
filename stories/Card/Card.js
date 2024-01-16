import React from 'react'
import './Card.css'

const Card = () => {
    return (
        <div class="box">
            <div class="card" style={{width: "340px" ,height:"412px"}}>
                <img src="./ffb7b894757284ab45e7f7045ffd1997.png" class="card-img-top" style={{width: "340px", height:"240.57px"}} alt="..." />

                <div class="card-body">
                    <div class="container mt-2">
                        <div class="text">
                            Bank Entrance-front-view Camera1
                        </div>
                        <div class="recepi">
                            <img src="./carbon_task-tools.svg" alt="" srcset="" />
                            3 Recipes Added
                        </div>
                        <div class="today">
                            <img src="./fluent_clipboard-error-16-regular.svg" alt="" srcset="" />
                            today, 04:45pm: Unidentified face detected
                        </div>
                        <div class="branch">
                            <img src="./tdesign_location.svg" alt="" srcset="" />
                            Coimbatore branch
                        </div>
                    </div>

                    <div class="fott">
                        <button type="button" class="btn btn-success">Active</button>
                        <img src="./material-symbols_delete-outline.svg" alt="" />
                        <img src="./bx_video-recording.svg" alt="" />
                        <img src="./mdi_graph-box.svg" alt="" />
                    </div>

                </div>
            </div>
            <div class="cardBox mt-3">
                <div class="container">
                    <div class="clipboard">
                        <img src="./fluent_clipboard-task-add-24-regular.svg" alt="" />
                    </div>
                    <div class="textmanag">
                        Recipe Management
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card
