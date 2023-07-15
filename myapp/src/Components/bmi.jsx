import React,{useCallback, useState} from "react";



const bmi=()=> {
    const [age ,setage]=React.useState();
    const [height ,setheight]=React.useState();
    const [weight,setweight]=React.useState();
    const [bmi,setbmi]=React.useState();
    const [msg,setmsg]=React.useCallback();

    const reload=()=>{
        window.href.location.reload();
    }



    const handlecal=(e)=>
    {
       e.preventDefault();
       if(weight===0 || height===0)
       {
        alert("please enter information correctly")
       }
       else
       {
        let bmiformula=(weight/(height*height)*703)
        setbmi(bmiformula.toFixed(2));
        if(bmi<=25)
        {
            setmsg("you are underweight")
        }
        elsif(bmi >25 || bmiformula<=30)
        {
            setmsg("you are healthy")
         }
        elsif(bmi>30)
          {
            setmsg("you are unhealthy please seek foor meedication");
         }
        }

       

       

    }





    return (
        <div className="App">
            <div className="container">
                <div classsName="title">
                    <form>
                    <div>
                        <label classsName="labels:"Age></label><br/>
                        <input classsName="bmi-input" type="number" placeholder="Age.."  value={age} onChange={(e)=>setage(e.target.value)}/>
                    </div>


                    <div>
                        <label classsName="labels:"height></label><br/>
                        <input classsName="bmi-input" type="number" placeholder="height.." value={height} onChange={(e)=>setheight(e.target.value)}/>
                    </div>
                    <div>
                        <label classsName="labels:"Age></label><br/>
                        <input classsName="bmi-input" type="weight" placeholder="weight.."value={weight} onChange={(e)=>setweight(e.target.value)} />
  
                    </div>
                     <div>
                        <button className="btn" type="submit" >calculate</button>
                        <button className="btn" type="submit" onClick={"reload()"} >Reload</button>
                    </div>



                    <div className="results">
                        <h2>Age:{age}</h2>
                        <h2>Your Bmi :{bmi}</h2>
                        <p className="p-msg">{msg}</p>

                    </div>

                    </form>
                
                </div>

            </div>

        </div>
    )
}

export default bmi;