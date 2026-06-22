// Single source of truth for the headline impact stats shown on the
// Home page (stats strip) and the About page (stats strip).
// Each stat uses the same icon/color pairing in both pages so the UI
// stays consistent.

import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import GroupsIcon from '@mui/icons-material/Groups';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Diversity3Icon from '@mui/icons-material/Diversity3';

export const IMPACT_STATS = [
  {
    key: 'donations',
    value: '5+',
    label: 'Donations Delivered',
    shortLabel: 'Donations',
    icon: VolunteerActivismIcon,
    color: '#1b5e20',
  },
  {
    key: 'volunteers',
    value: '10+',
    label: 'Active Volunteers',
    shortLabel: 'Volunteers',
    icon: GroupsIcon,
    color: '#E91E63',
  },
  {
    key: 'lives',
    value: '50+',
    label: 'Lives Touched',
    shortLabel: 'Lives Touched',
    icon: FavoriteIcon,
    color: '#FF9800',
  },
  {
    key: 'communities',
    value: '1+',
    label: 'Communities Served',
    shortLabel: 'Communities',
    icon: Diversity3Icon,
    color: '#1E88E5',
  },
];
