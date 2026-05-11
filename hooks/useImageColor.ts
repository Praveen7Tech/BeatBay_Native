import { useEffect, useState } from "react";
import { Image } from "react-native";
import ImageColors from "react-native-image-colors";



export const useImageColor = (imageUri: string | any, fallback = '#121212') => {
  const [color, setColor] = useState(fallback);

  useEffect(() => {
    const fetchColor = async () => {
      if (!imageUri) return;

      try {
        // Handle both URLs and local assets
        const uri = typeof imageUri === 'string' ? imageUri  : Image.resolveAssetSource(imageUri).uri;

        const result = await ImageColors.getColors(uri, {
          fallback: fallback, cache: true, key: uri, });

        switch (result.platform) {
          case 'android':
            setColor(result.dominant || result.vibrant || fallback);
            break;
          case 'ios':
            setColor(result.primary || result.background || fallback);
            break;
          default:
            setColor(fallback);
        }
      } catch (e) {
        console.log("Color extraction error:", e);
        setColor(fallback);
      }
    };

    fetchColor();
  }, [imageUri]);

  return color;
};