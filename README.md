# AI Image Generator

A web-based application that generates stunning images using artificial intelligence. Create unique images by describing what you want to see, and let AI bring your imagination to life.

## Features

- **Text-to-Image Generation**: Describe any image and the AI will generate it for you
- **Multiple AI Models**: Access to advanced AI models like FLUX.1 Schnell
- **Random Prompt Generator**: Need inspiration? Generate random prompts to explore creative possibilities
- **Simple & Intuitive UI**: Clean, user-friendly interface for easy image generation
- **Batch Generation**: Generate multiple images at once
- **Real-time Feedback**: Visual feedback while your images are being generated

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection
- Hugging Face API key for image generation

### Installation

1. Clone or download this repository:
   ```bash
   git clone https://github.com/yourusername/AI-Image-Generator.git
   cd AI-Image-Generator
   ```

2. Open `index.html` in your web browser

3. Set up your API key in `env.js`:
   - Replace the placeholder API_KEY with your Hugging Face API key
   - Get your API key from [Hugging Face](https://huggingface.co/settings/tokens)

### Configuration

Edit `env.js` to add your Hugging Face API key:

```javascript
const API_KEY = "your_hugging_face_api_key_here";
```

## Usage

1. **Enter a Prompt**: Describe the image you want to generate in the text area (up to 1000 characters)
   - Example: "A sunset over the ocean with colorful clouds and flying birds"

2. **Select AI Model**: Choose from available AI models (FLUX.1 Schnell is currently available)

3. **Choose Number of Images**: Select how many images you want to generate (1-6)

4. **Generate Random Prompt** (Optional): Click the "GENERATE RANDOM" button to get inspiration

5. **Generate Images**: Click the "Generate Images" button to start the generation process

6. **View Results**: Your generated images will appear in the gallery below the form

## File Structure

```
AI-Image-Generator/
├── index.html       # Main HTML structure
├── index.js         # JavaScript logic and API integration
├── index.css        # Styling and layout
├── env.js           # Environment variables (API keys)
└── README.md        # This file
```

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **AI API**: Hugging Face Inference API
- **Model**: FLUX.1 Schnell (Black Forest Labs)
- **Deployment**: Client-side web application

## API Integration

This application uses the Hugging Face Inference API to generate images. The API integrates with the FLUX.1 Schnell model for fast, high-quality image generation.

### API Endpoint
```
https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-schnell
```

## Features Explained

### Random Prompt Generator
Stuck on ideas? Click the "GENERATE RANDOM" button to automatically fill the prompt field with creative suggestions like:
- "A magic forest with glowing plants and fairy homes among giant mushrooms"
- "An old steampunk airship floating through golden clouds at sunset"
- "A future Mars colony with glass domes and gardens against red mountains"

### Character Counter
Keep track of your prompt length with the real-time character counter (max 1000 characters)

## Known Limitations

- Maximum prompt length: 1000 characters
- Maximum images per generation: 6
- Requires active internet connection
- API rate limits apply based on Hugging Face plan

## Browser Compatibility

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Security Notes

⚠️ **Important**: Never commit your `env.js` file with your API key to public repositories. Use environment variables or a .gitignore file to protect sensitive credentials.

## Troubleshooting

### Images not generating?
- Check your internet connection
- Verify your API key is correct in `env.js`
- Check browser console for error messages (F12)
- Ensure your API key has appropriate permissions

### Getting "Authorization" errors?
- Verify your API key is valid
- Check that your Hugging Face account is active
- Ensure you haven't exceeded rate limits

### Prompt not accepted?
- Ensure prompt is not empty
- Check that prompt is under 1000 characters
- Try using clear, descriptive language

## Future Improvements

- [ ] Support for additional AI models (DALL-E, Stable Diffusion, etc.)
- [ ] Image size/resolution options
- [ ] History of generated images
- [ ] Download/share functionality
- [ ] Image editing tools
- [ ] Advanced parameters control
- [ ] Multi-language support

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## License

This project is open source and available under the MIT License.

## Acknowledgments

- [Hugging Face](https://huggingface.co/) for the Inference API
- [Black Forest Labs](https://www.blackforestlabs.ai/) for FLUX.1 model
- UI components from [Uiverse.io](https://uiverse.io/)

## Support

For questions, issues, or suggestions, please open an issue on the project repository or contact the developer.

---

**Happy Creating!** 🎨✨
