import { App } from "astal/gtk3";
import TopBar from "./widgets/TopBar";
import LeftBar from "./widgets/LeftBar";
import VolumeOSD from "./widgets/OSD/VolumeOSD";
import BrightnessOSD from "./widgets/OSD/BrightnessOSD";
import BottomBar from "./widgets/BottomBar";

App.start({
  // background-color: @warning_color;
  css: `
    levelbar {
      border-radius: 2px;
    }

    levelbar .filled {
      border-radius: 2px;
      background-clip: padding-box;
    }

    levelbar.low .filled {
      background-color: @success_color;
    }

    levelbar.medium .filled {
      background-color: @theme_selected_bg_color
    }

    levelbar.high .filled {
      background-color: @error_color;
    }
    `,
  main() {
    for (const monitor in App.get_monitors()) {
      TopBar({ monitor: Number(monitor) });
      LeftBar({ monitor: Number(monitor) });
      BottomBar({ monitor: Number(monitor) });
      VolumeOSD({ monitor: Number(monitor) });
      BrightnessOSD({ monitor: Number(monitor) });
    }
  },
});
