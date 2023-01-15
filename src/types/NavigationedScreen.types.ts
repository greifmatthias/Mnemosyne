import {NavigationProp, Route} from '@react-navigation/native';

type Screens = 'NetworkScreen';

export type NavigationedScreen<
  N extends Screens,
  Params extends object = {},
> = {
  navigation: NavigationProp<{[K in Screens]: Params | undefined}>;
  route: Route<N, Params | undefined>;
};
