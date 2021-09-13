import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  textInput: {
    margin: "15px 0",
  },
  drawer: {
    width: "200px",
  },
  listItem: {
    textDecoration: "none",
    color:"#000",
  },
  imageCard:{
      height:300,
      padding:'10px',
      objectFit:'contain'
  },
  card:{
      margin:'10px 0 0 0',

  },
  loadingContainer:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    marginTop:'200px'
  },
 title:{
   margin:'15px 0'
 },
 image:{
   padding:'15px',
    objectFit:'fill'
 }
});
