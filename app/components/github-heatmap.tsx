"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useColorScheme } from "app/hooks/use-color-scheme";

interface GitHubHeatmapProps {
  username: string;
}

export default function GitHubHeatmap({ username }: GitHubHeatmapProps) {
  const colorScheme = useColorScheme();

  return (
    <div className="overflow-x-auto py-4">
      <GitHubCalendar
        username={username}
        blockSize={11}
        blockMargin={4}
        fontSize={12}
        theme={{
          light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
          dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
        }}
        colorScheme={colorScheme}
      />
    </div>
  );
}
