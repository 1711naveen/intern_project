import './Card.css'
import 'C:/Users/ynnav/OneDrive/Documents/nextjs/Project/intern_project/node_modules/bootstrap/dist/css/bootstrap.css'

const Card = () => {
    return (
        <>
            <div className="outerbox mx-5">
                <div className="card" style={{ height: "412px", width: "340px" }}>
                    <img src="" className="card-img-top" alt="..." width="340" height="240" />
                    <div className="card-body">
                        <b><h5 className="card-title" style={{ fontSize: "16px" }}>Bank Entrance-front-view Camera1</h5></b>
                        <div className="container" style={{ fontSize: "13px" }}>
                            <div className="container p-2"  >
                                <img src="" alt="" />
                                3 Recipes Added
                            </div>
                            <div className="container p-2">
                                <img src="" alt="" />
                                today, 04:45pm: Unidentified face detected
                            </div>
                            <div className="container p-2">
                                <img src="" alt="" />
                                Coimbatore branch
                            </div>
                        </div>
                        <div className="box1">
                            <button type="button" className="btn btn-success btn-sm m-2">Active</button>
                            <img src="material-symbols_delete-outline.png" alt="" width="12" height="12" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>

                    </div>
                </div>

                <div className="card2 mx-5">
                    <img src='/fluent_clipboard-task-add-24-regular.svg' alt="" width="48" height="48" />
                    <div className="recipe">
                        Recipe Management
                    </div>
                    <div className="coner">
                        Manage
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card
