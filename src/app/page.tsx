// Import the necessary components
import { LampDemo } from "./lamp";
import { TimelineDemo } from "./timeline";
import {AppleCardsCarouselDemo} from "./card"
import {FloatingDockDemo} from "./lowerdrop"


// Define the Home component
export default function Home() {
  return (
    <>
      <LampDemo />
      <AppleCardsCarouselDemo/>
      <TimelineDemo/>
      <FloatingDockDemo/>

    </>
  );
}
