import React from 'react'
/**
 * ToolTip renders hint to the element passed as child 
 * 
 */
class ToolTip extends React.Component{
    
    constructor(props){
        super(props)
        this.tooltip=React.createRef()//setup ref for the tooltip wrapper
        this.tooltipText=React.createRef()//ref for the toolTip text hint component
        this.state={
            pos:{
                left:0,
                right:0,
            }
        }//state has pos i.e the pos with reference to the passed child
    }
    componentDidMount(){
        
        const width=this.tooltip.current.offsetWidth;
        const height=this.tooltip.current.offsetHeight
        let pos={}
        /**
         * setup pos with reference to the toolTip component to render hint on hover
         */
        switch(this.props.pos){
            case "left":
                pos={
                   right:width,
                   
                   top:height/2
                }
                break;
            case "right":
                pos={
                    left:width,
                    top:height/2
                }
                break;
            case "bottom":
                pos={
                    left:width/2-this.tooltipText.current.offsetWidth/2,
                    top:height
                }
                break;
            case "top":
                pos={
                    left:width/2-this.tooltipText.current.offsetWidth/2,
                    top:-this.tooltipText.current.offsetHeight
                }
        }
        this.setState((state)=>{
            return {
                pos
            }
        })//setState to re render 
    }
    render(){
        
        
        return (
            <div className="tooltip" ref={this.tooltip}>
                {this.props.children }
                
                <div className={`tooltipText ${this.props.pos}`} style={this.state.pos} ref={this.tooltipText}>
                    {this.props.hint?this.props.hint:"This is tooltip text"}
                </div>
            </div>
        )
    }
}

export default ToolTip