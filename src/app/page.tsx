// Import the necessary components
// import { LampDemo } from "./lamp";
import { TimelineDemo } from "./timeline";
import {AppleCardsCarouselDemo} from "./card"
import {WavyBackgroundDemo} from "./wavy"


// Define the Home component
export default function Home() {
  return (
    <>
      <WavyBackgroundDemo/>
      <AppleCardsCarouselDemo/>
      <TimelineDemo/>

    </>
  );
}
