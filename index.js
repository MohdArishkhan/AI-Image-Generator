const randomText = [
  "A magic forest with glowing plants and fairy homes among giant mushrooms",
  "An old steampunk airship floating through golden clouds at sunset",
  "A future Mars colony with glass domes and gardens against red mountains",
  "A dragon sleeping on gold coins in a crystal cave",
  "An underwater kingdom with merpeople and glowing coral buildings",
  "A floating island with waterfalls pouring into clouds below",
  "A witch's cottage in fall with magic herbs in the garden",
  "A robot painting in a sunny studio with art supplies around it",
  "A magical library with floating glowing books and spiral staircases",
  "A Japanese shrine during cherry blossom season with lanterns and misty mountains",
];
// queryselectors and id selectors
const randomButton = document.querySelector(".btn");
const prompt = document.getElementById("prompt");
const modelSelect = document.getElementById("model");
const numImageSelect = document.getElementById("numImages");
const imageSizeSelect = document.getElementById("imageSize");
const generateButton = document.querySelector(".btn-generate");
const imagegrid = document.querySelectorAll(".image-item");



//helper function to clear all Images
function clearimages(){
    for(let i = 1 ; i <=6; i ++){
        const slot = document.getElementById(`image-${i}`);
        slot.innerHTML = "";
    }
}

// generate button eventlistener
const handlesGenerate = async(e) => {
  e.preventDefault();
  // get the values from the input fields
  const promptVal = prompt.value;
  const modelSelectVal = modelSelect.value;
  const numImageSelectVal = parseInt(numImageSelect.value) || 1;
  const imageSizeSelectVal = imageSizeSelect.value;
  // log the values to the console
  // console.log('Prompt:', promptVal);
  // console.log('Model Selected:', modelSelectVal);
  // console.log('Number of Images:', numImageSelectVal);
  // console.log('Image Size:', imageSizeSelectVal);
  // yaha pe hoga data fetch
  try {
    clearimages();
     for (let i = 1; i <= numImageSelectVal && i <= 6; i++) {
      const blob = await generatePrompt(
        promptVal,
        modelSelectVal,
        numImageSelectVal,   // ya 1, depending on tum generatePrompt me kya use kar rahe ho
        imageSizeSelectVal
      );
      const img = document.createElement("img");
        img.src = URL.createObjectURL(blob);
        img.alt = `Generated Image ${i}`;
        img.className = "generated-image";
        const slot = document.getElementById(`image-${i}`);
        if(slot){
            slot.appendChild(img);
        } else {
            console.log(`No slot found for image-${i}`);
        }
    //   console.log(blob);
      const imageUrl = URL.createObjectURL(blob);
    }
  } catch (err) {
    console.log(err);
  }
};
generateButton.addEventListener("click", handlesGenerate);

//variable function to generate prompt using ai model api....
const generatePrompt = async (
  promptVal,
  modelSelectVal,
  numImageSelectVal,
  imageSizeSelectVal
) => {
  try {
    const MODEL_URL = `https://router.huggingface.co/hf-inference/models/${modelSelectVal}`;
    const res = await fetch(MODEL_URL, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        inputs: promptVal,
        // parameters: {
        //   num_images: numImageSelectVal,
        //   size: imageSizeSelectVal,
        // },
        // options: { wait_for_model: true, user_cache: false },
      }),
    });
     if (!res.ok) {
      const errText = await res.text().catch(() => "");
      throw new Error(`HF error ${res.status}: ${errText || res.statusText}`);
    }
    const result = await res.blob();
    return result;
    } catch (err) {
    throw err;
    } 
};

// random generator eventlistner
randomButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * randomText.length);
  prompt.value = randomText[randomIndex];
  prompt.value = "";
  const speed = 25;

  for (let i = 0; i < randomText[randomIndex].length; i++) {
    setTimeout(() => {
      prompt.value += randomText[randomIndex][i];
    }, speed * i);
  }
  setTimeout(() => {
    prompt.value += ".";
  }, speed * randomText[randomIndex].length);
});
