import React from 'react'
import DescriptionBox1 from '../DescriptionBox1';
import DescriptionBox2 from '../DescriptionBox2';
import DescriptionBox3 from '../DescriptionBox3';
import Button from '@material-ui/core/Button';

const ModIsUndefined = ({HandleChanges, HandleAppBarValeuChange}) => {
  return (
    <div className="wraperA">
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "20px",
        marginBottom: "10px"
      }}
    >
      <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={HandleChanges("openDialog")}
      >
        Choose Mod & Play
      </Button>
    </div>
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <DescriptionBox1 HandleAppBarValeuChange={HandleAppBarValeuChange}/>
      <DescriptionBox2 HandleAppBarValeuChange={HandleAppBarValeuChange}/>
      <DescriptionBox3 HandleAppBarValeuChange={HandleAppBarValeuChange}/>
    </div>
  </div>
  )
}

export default ModIsUndefined
