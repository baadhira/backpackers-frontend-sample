import React, { useState } from "react";
import { DarkBtn, SecondaryBtn } from "../../components/Button/Button";
import { H3, H4 } from "../../components/Text/Text";

import { Flex } from "../../components/UI/Flex/Flex";
import { AllEvent } from "../Event/AllEvent";
import { Myevent } from "../Event/Myevent";
import { JoinedEvent } from "../Event/JoinedEvent";
import { CreateEvent } from "../Event/subComponent/CreateEvent";
import { ProgramCustomize } from "./ProgramCustomize";
import { useQueryFetch } from "../../Hooks/useQueryFetch";
export const Program = () => {
  const [createEvent, setCreateEvent] = useState(false);
  const [tabs,setTabs] =useState(1)

  const { fetchData: allevent } = useQueryFetch("eventapi/events");
  const { fetchData: joiner } = useQueryFetch("eventapi/getjoinedusers/");

  

  const ProgramCustomize=[
    {
      id:'1',
    eventname:"All Events"
  },
    {
      id:'2',
    eventname:"Participating Events"
  },
  {
    id:'3',
  eventname:"My Events"
},
]
  
  return (
    <div style={{marginTop:"80px"}}>
      <Flex>
      {/* <DarkBtn  stylecolor={tabs===1? "black" : "white"} onClick={() => setTabs(1)} margin="10px">All Events</DarkBtn>
      <DarkBtn stylecolor={tabs===2? "black" : "white"} onClick={() => setTabs(2)} margin="10px">My Events</DarkBtn>
      <DarkBtn stylecolor={tabs===3? "black" : "white"} onClick={() => setTabs(3)} margin="10px">Participating Events</DarkBtn> */}
      </Flex>

      <Flex>

                {ProgramCustomize.map(data =>

                    <DarkBtn onClick={() => setTabs(data.id)} stylecolor={tabs === data.id ? "dark" : "white"} margin="10px">{data.eventName}</DarkBtn>

                )}

            </Flex>
      

      {createEvent ? (
        <div className="bg_black">
          <CreateEvent setCreateEvent={setCreateEvent} />
        </div>
      ) : null}




     {/* {ProgramCustomize.map(data =>( */}

      <ProgramCustomize
   
       joiner={joiner}
        allevent={allevent}
        // eventname={data.eventname}
  
        
        />
     {/* ))} */}

    

{/* {tabs===2?
<>
      <H3 fontWeight="bold" margin="20px">
        Created Events
      </H3>
      <SecondaryBtn margin="20px" onClick={() => setCreateEvent(true)}>
        <i class="fa-solid fa-plus"></i> CREATE EVENT
      </SecondaryBtn>
      <Myevent />
      </>
      :null
      
}

{tabs===3?
<>
      <H3 fontWeight="bold" margin="20px">
        Participating Events
      </H3>
      <JoinedEvent />
      </>:null
} */}



    </div>
  );
};

