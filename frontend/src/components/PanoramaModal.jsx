import { useEffect, useRef } from "react";

import bedroom from "../assets/bedroom1.png";
import bathroom from "../assets/restroom1.png";

export default function PanoramaModal({ isOpen, onClose, image }) {
  const viewerRef = useRef(null);
  const viewerInstance = useRef(null);

  useEffect(() => {
    if (!isOpen || !viewerRef.current || !window.pannellum) return;

    let idleTimer;
    const container = viewerRef.current;

    // destroy previous viewer
    if (viewerInstance.current) {
      viewerInstance.current.destroy();
    }

    const viewer = window.pannellum.viewer(container, {
      default: {
        firstScene: "hallway",
        sceneFadeDuration: 1000
      },

      scenes: {
        // 🔥 MAIN SCENE
        hallway: {
          type: "equirectangular",
          panorama: image,
          autoLoad: true,

          hotSpotDebug: true,

          hfov: 80,
          minHfov: 50,
          maxHfov: 100,

          friction: 0.6,

          hotSpots: [
            {
              pitch: -5,
              yaw: 160,
              cssClass: "custom-hotspot",
              createTooltipFunc: (div) => {
                div.innerHTML = `
                  <div class="door-wrapper">
                    <div class="pulse-ring"></div>
                    <img src="/door-icon.png" />
                    <span>Restroom</span>
                  </div>
                `;
                div.onclick = () => viewer.loadScene("bathroom");
              }
            },
            {
              pitch: -2,
              yaw: 175,
              cssClass: "custom-hotspot",
              createTooltipFunc: (div) => {
                div.innerHTML = `
                  <div class="door-wrapper">
                    <div class="pulse-ring"></div>
                    <img src="/door-icon.png" />
                    <span>Bedroom</span>
                  </div>
                `;
                div.onclick = () => viewer.loadScene("bedroom");
              }
            }
          ]
        },

        // 🛏 BEDROOM
        bedroom: {
          type: "equirectangular",
          panorama: bedroom,
          autoLoad: true,

          hotSpots: [
            {
              pitch: 10,
              yaw: 0,
              cssClass: "custom-hotspot",
              createTooltipFunc: (div) => {
                div.innerHTML = `
                  <div class="door-wrapper">
                    <span>⬅ Back</span>
                  </div>
                `;
                div.onclick = () => viewer.loadScene("hallway");
              }
            }
          ]
        },

        // 🚿 BATHROOM
        bathroom: {
          type: "equirectangular",
          panorama: bathroom,
          autoLoad: true,

          hotSpots: [
            {
              pitch: 10,
              yaw: 0,
              cssClass: "custom-hotspot",
              createTooltipFunc: (div) => {
                div.innerHTML = `
                  <div class="door-wrapper">
                    <span>⬅ Back</span>
                  </div>
                `;
                div.onclick = () => viewer.loadScene("hallway");
              }
            }
          ]
        }
      }
    });

    viewerInstance.current = viewer;

    // 🔥 Auto-rotate control
    const startAutoRotate = () => {
      viewer.startAutoRotate(-1);
    };

    const stopAutoRotate = () => {
      viewer.stopAutoRotate();
    };

    const handleStart = () => {
      stopAutoRotate();
      clearTimeout(idleTimer);
    };

    const handleEnd = () => {
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        startAutoRotate();
      }, 2000);
    };

    // ✅ attach safely
    container.addEventListener("pointerdown", handleStart);
    container.addEventListener("pointerup", handleEnd);

    // start rotation initially
    startAutoRotate();

    // cleanup
    return () => {
      clearTimeout(idleTimer);

      container.removeEventListener("pointerdown", handleStart);
      container.removeEventListener("pointerup", handleEnd);

      if (viewerInstance.current) {
        viewerInstance.current.destroy();
      }
    };

  }, [isOpen, image]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black">

      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-3xl z-10"
      >
        ✕
      </button>

      <div ref={viewerRef} className="w-full h-full" />

    </div>
  );
}