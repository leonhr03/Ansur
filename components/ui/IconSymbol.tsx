// src/components/IconComponent.tsx
import React from 'react';

// 1. Zuerst definieren wir den korrekten IconMapping-Typ
type IconName = "alarm" | "bolt" | "book" | "bookmark" | "camera" | "circle"
    | "clear" | "cloud" | "crop" | "eject" | "flag" | "folder" | "forward"
    | "headphones" | "hexagon" | "house" | "info" /* ... weitere Icons */;

type IconMapping = Record<IconName, string>;

// 2. Safe-Variante mit Type-Predicate zur Validierung
function isValidIcon(icon: string): icon is IconName {
  const validIcons: IconName[] = [
    "alarm", "bolt", "book", "bookmark", "camera", "circle",
    "clear", "cloud", "crop", "eject", "flag", "folder",
    "forward", "headphones", "hexagon", "house", "info"
  ];
  return validIcons.includes(icon as IconName);
}

// 3. Komponente, die das IconMapping sicher verwendet
export const IconSymbol = ({iconName, name, size, weight, color, style}: {
  iconName?: string,
  name?: string,
  size?: number,
  weight?: string,
  color?: string,
  style?: { transform: { rotate: string }[] }
}) => {
  // 4. Sicherer Umgang mit string | undefined Werten
  const getSafeIcon = (): IconName | undefined => {
    if (!iconName) return undefined;
    return isValidIcon(iconName) ? iconName : undefined;
  };

  const currentIcon = getSafeIcon();

  // 5. Beispiel für Icon-Mapping mit Typ-Sicherheit
  const iconMap: IconMapping = {
    alarm: "⏰",
    bolt: "⚡",
    book: "📖",
    bookmark: "🔖",
    camera: "📷",
    circle: "🔘",
    clear: "❌",
    cloud: "☁️",
    crop: "✂️",
    eject: "⏏️",
    flag: "🚩",
    folder: "📁",
    forward: "⏩",
    headphones: "🎧",
    hexagon: "⬢",
    house: "🏠",
    info: "ℹ️"
  };

  return (
      <div className="icon-container">
        {currentIcon ? (
            <span className="icon">{iconMap[currentIcon]}</span>
        ) : (
            <span className="icon-placeholder">No icon selected</span>
        )}
      </div>
  );
};

// CSS-Teil (optional)
const styles = `
  .icon-container {
    font-size: 2rem;
    padding: 1rem;
  }
  .icon-placeholder {
    color: #ccc;
  }
`;

// 6. Beispielverwendung
const App = () => {
  return (
      <>
        <style>{styles}</style>
        <IconSymbol iconName="house" /> {/* Korrekt */}
        <IconSymbol iconName="camera" /> {/* Korrekt */}
        <IconSymbol iconName="invalid" /> {/* Wird abgefangen */}
        <IconSymbol /> {/* Undefined-Handling */}
      </>
  );
};

export default App;
