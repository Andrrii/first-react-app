import React from "react"
import { Button } from "reactstrap"
import "./post-status-filter.css"

const PostStatusFilter = () => {

return(
    <div className= "btn-group">
        <Button  outline color="info">Всі</Button>
        <Button  type = "button" className="btn btn-outline-secondary" >Сподобалось</Button>
    </div>
)

}
export default PostStatusFilter