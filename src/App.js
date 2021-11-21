import {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios'
function App() {
  const [file, setFile] = useState()
  const [text, setText] = useState("")
  useEffect(() => {
    console.log(file)
  }, [file] )

  const api = "http://e7b4-43-241-64-2.ngrok.io/summarise/"
  
  const handleSubmit = async() => {
    console.log("Function entered")
    var formData = new FormData()


    formData.append("input_txt", file)
    try{
      const data = await axios.post(api, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      // console.log(data.data.summary_text)
      setText(data.data.summary_text)
    } catch (err) {
      console.log(err)
    }
  } 

  return (
    <div className="App">
     <input type="file" id="myFile" name="filename" onChange={(e) => setFile(e.target.files[0])}/>

     {/* <input type="file" id="myFile" name="filename" /> */}
      <input type = "button" value="submit" onClick={() => handleSubmit()}/>
      <br />
      <p>
        {text}
      </p>
    </div>
  );
}

export default App;