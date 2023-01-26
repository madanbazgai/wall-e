import { useState } from "react";
const { Configuration, OpenAIApi } = require("openai");
import { Triangle } from "react-loader-spinner";
import DisplayImage from "../components/DisplayImage"

export default function Home() {
  const [prompt, setPrompt] = useState("A cyberpunk monster in a control room");
  const [result, setResult] = useState(["/cyberpunk.webp"]);
  

  const openai = new OpenAIApi(
    new Configuration({ apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY })
  );
  const generateImage = async () => {
    setResult([]);
    setPrompt("");

    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "512x512",
    });
    setResult([res.data.data[0].url]);
    setPrompt(prompt)
    
  };
  return (
    <div className=" h-screen flex flex-col items-center justify-between">
      <h2 className="text-3xl text-center mt-3">WALL-E</h2>

      <div className="flex flex-col items-center">
        <p>{prompt}</p>

        
       
        {result.length < 1 ? (
          <Triangle
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            visible={true}
          />
        ) : (
          <DisplayImage result={result}/>
        )}
        <textarea
          className="text-xs border border-gray-500 p-2 rounded-md border-dotted"
          placeholder="Enter a text prompt to generate an Image."
          onChange={(e) => setPrompt(e.target.value)}
          rows={2}
          cols={40}
        />
        <button
          className="bg-green-600 px-2 py-1 mt-2 rounded-lg"
          onClick={generateImage}
        >
          Generate an Image
        </button>
      </div>

      <p className="text-xs text-center font-extralight">
        &copy; Designed and Developed by{" "}
        <a className="underline font-bold" href="madanbajgai.com.np">
          Madan Bazgai
        </a>
      </p>
    </div>
  );
}
