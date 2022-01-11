import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [counter,setCounter] = useState(1);
  useEffect(()=>{

    let titleText = "Count: "+ counter;
    document.title = titleText;
  },[counter]);
  return (
    <div className="App">
      <section class="hero">
        <div class="hero-body">
          <p class="title"></p>
          <p class="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div class="container is-fullhd">
        <div class="notification">
          Edit the <code>./src</code> folder to add components.
        </div>
        <div>
          <button 
          onClick= {()=>{
                          setCounter(
                            (counter)=>{return counter+1;
                                        });
                        }
                    }
          
          >Count: {counter}</button>
        </div>
      </div>
    </div>
  );
}

export default App;
