import { useState } from "react";
import classes from './style.module.scss'

const DropBox=(props)=>{
    const{txt,description}=props
    const[open,setOpen]=useState(false)

    const changeStatus=()=>{
        setOpen(!open)
    }
    
    return(
        <>
            <div className={classes.alinclub__question__item} onClick={changeStatus}>
                <div className={classes.row_div}>
                    {open
                        ?<i data-icon="u" className={classes.inverse_icon}></i>
                        :<i data-icon="k" ></i>    
                    }
                    <span>{txt}</span>
                </div>
                <div className={classes.reply_box} style={{display:open ?'flex' :'none'}}>
                    <p>{description}</p>
                </div>
            </div>
           
        </>
    )
}

export default DropBox;