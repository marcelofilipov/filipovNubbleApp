import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useAppTheme} from './useAppThemes';

export function useAppSafeArea() {
  const {top} = useSafeAreaInsets();
  const {spacing} = useAppTheme();

  return {
    top: Math.max(top, spacing.s20),
  };
}
