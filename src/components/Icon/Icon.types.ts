import {SvgProps} from 'react-native-svg';

import {Color} from 'theme';

import * as assets from './assets';

export const icons = {
  none: assets.None,

  'alerttriangle-outline': assets.OutlineAlertTriangle,
  'arrow-back': assets.ArrowBack,
  'arrow-down-circle': assets.CircleArrowDown,
  'arrow-down-circle-outline': assets.OutlineCircleArrowDown,
  'arrow-forward': assets.ArrowForward,
  'arrow-upward': assets.ArrowUpward,
  'arrow-up-circle': assets.CircleArrowUp,
  'arrow-up-circle-outline': assets.OutlineCircleArrowUp,
  'award-outline': assets.OutlineAward,
  bookmark: assets.Bookmark,
  checkmark: assets.Checkmark,
  'bookmark-outline': assets.OutlineBookmark,
  'close-circle': assets.CircleClose,
  'close-circle-outline': assets.OutlineCircleClose,
  'copybook-fluent': assets.FluentCopybook,
  'cube-outline': assets.OutlineCube,
  'edit-outline': assets.OutlineEdit,
  ellipsisv: assets.EllipsisV,
  'file-outline': assets.OutlineFile,
  'folder-outline': assets.OutlineFolder,
  google: assets.Google,
  'harddrive-outline': assets.OutlineHardDrive,
  heart: assets.Heart,
  'heart-fluent': assets.FluentHeart,
  'heart-outline': assets.OutlineHeart,
  'info-outline': assets.OutlineInfo,
  'layers-outline': assets.OutlineLayers,
  'login-outline': assets.OutlineLogin,
  map: assets.Map,
  'mapmarker-fluent': assets.FluentMapmarker,
  menu: assets.Menu,
  'message-circle': assets.CircleMessage,
  'message-circle-outline': assets.OutlineCirlceMessage,
  'message-square': assets.SquareMessage,
  'message-square-outline': assets.OutlineSquareMessage,
  'navigation-outline': assets.OutlineNavigation,
  'paperplane-outline': assets.OutlinePaperPlane,
  'pin-outline': assets.OutlinePin,
  plus: assets.Plus,
  'plus-circle': assets.CirclePlus,
  'plus-circle-outline': assets.OutlineCirclePlus,
  search: assets.Search,
  'settings-outline': assets.OutlineSettings,
  spinner: assets.Spinner,
  'star-outline': assets.OutlineStar,
  'trash-outline': assets.OutlineTrash,
  unlock: assets.Unlock,
  'unlock-outline': assets.OutlineUnlock,
  'upload-outline': assets.OutlineUpload,
  user: assets.User,
};

type Icons = typeof icons;
export type IconName = keyof Icons;

export type IconSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type IconAssetProps = SvgProps & {
  extra?: any;
};

export type IconProps = Omit<IconAssetProps, 'color'> & {
  name?: IconName;
  color?: Color;
  size?: IconSize | {width: number; height: number};
  extra?: any;
};
