
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-regular-svg-icons"; 
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons"; 
import {faTrash} from "@fortawesome/free-solid-svg-icons"; 
import "./index.css"
const initialContainerBackgroundClassNames = [
    "blue","orange","green"
  ]
let TodoItem = (props)=>{
    const c = initialContainerBackgroundClassNames[Math.ceil(
        Math.random() * initialContainerBackgroundClassNames.length - 1,
    )]
    let {details,display,d} = props;
    let x = ()=>{
        display(details);
    }
    let y = ()=>{
       d(details.id);
    }
   
    return (
        <li>
            <div className="btn ">

            
            <button onClick={x} className={c}>
                <div className="element">
                    <div className="k">
                        {details.style ? <FontAwesomeIcon icon={faCircleCheck} />:<FontAwesomeIcon icon={faCircle} />}
                    </div>
                    <div>
                        <h1>{details.heading}</h1>
                        
                    </div>
                    
                </div>
            </button>
            <button className="trash" onClick={y}>
                <FontAwesomeIcon icon={faTrash} />
            </button>
            </div>
        </li>
        
    )
}
export default TodoItem;