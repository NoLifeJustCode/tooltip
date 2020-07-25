import React from 'react';
import ToolTip from './ToolTip'

/**
 * Main component 
 */
function App() {
  return (
    /**
     * ToolTip component
     * @props : pos:["top","bottom","left","right"],hint:Any String to be displayed as toolTip hint
     */
    <ToolTip pos={"right"} >
      {/* 
        * The button as child or any child component to be hovered for tooltip
        */}
      <button class="btn">
              ToolTip
      </button>
      
    </ToolTip>
  );
}

export default App;
