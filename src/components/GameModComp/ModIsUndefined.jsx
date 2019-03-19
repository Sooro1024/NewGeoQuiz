import React from 'react'
import DescriptionBox from '../DescriptionBox';
import Button from '@material-ui/core/Button';

const ModIsUndefined = ({HandleChanges}) => {
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
      <DescriptionBox />
      <DescriptionBox />
      <DescriptionBox />
    </div>
  </div>
  )
}

export default ModIsUndefined
