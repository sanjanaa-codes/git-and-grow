/**
 * 🔹 React Profile Tabs: useState, Keys, and Component Mapping
 *
 * This document explains:
 * 1. Why React needs `key` when rendering lists
 * 2. How to use `componentMap` to dynamically render content
 * 3. How to track the selected tab using `useState`
 */

/* --- 1. Tabs with Keys and Icons --- */

const profileTabs = [
  {
    label: 'Profile',
    key: 'profile',
    icon: <ProfileIcon size={18} stroke="#000000" />,
  },
  {
    label: 'Delivery Details',
    key: 'delivery-details',
    icon: <LocationIcon size={18} stroke="#000000" />,
  },
  {
    label: 'Profile Info',
    key: 'profile-info',
    icon: <ProfileIcon size={18} stroke="#000000" />,
  },
  {
    label: 'Offers',
    key: 'offers',
    icon: <OffersIcon size={18} stroke="#000000" />,
  },
  {
    label: 'Orders',
    key: 'orders',
    icon: <OrdersIcon size={18} stroke="#000000" />,
  },
  {
    label: 'Wishlist',
    key: 'wishlist',
    icon: <HeartIcon size={18} stroke="#000000" />,
  },
  {
    label: 'My Addresses',
    key: 'addresses',
    icon: <LocationIcon size={18} stroke="#000000" />,
  },
  {
    label: 'Size Details',
    key: 'sizes',
    icon: <SizesIcon size={18} stroke="#000000" />,
  },
  {
    label: 'Help Center',
    key: 'help',
    icon: <SizesIcon size={18} />,
  },
  {
    label: 'Your feedbacks',
    key: 'feedbacks',
    icon: <FeedbackIcon size={18} />,
  },
];

// 🔍 React uses `key` to keep track of list items efficiently.
// Avoid using array index as key — use stable strings like tab keys.

/* --- 2. useState to Track Active Tab --- */

const [activeTab, setActiveTab] = useState(profileTabs[0].key);

// 🔍 `activeTab` holds the currently selected tab key.
// Initial value is set to the first tab's key (e.g., "profile").
// `setActiveTab()` lets us update which tab is selected when the user clicks a tab.

/* --- 3. Component Map --- */

const componentMap: Record<string, React.ReactNode> = {
  profile: <BannerSection />,
  'delivery-details': <DeliveryDetails />,
  'profile-info': <Profile />,
  offers: <OffersTabs />,
  orders: <Orders />,
  wishlist: <div>Wishlist Component</div>,
  addresses: <DeliveryDetails />,
  sizes: <div>Sizes Component</div>,
  help: <HelpCenter />,
  feedbacks: <ProfileFeedback />,
};

// 🔍 `componentMap` connects each tab key to a component.
// Helps us render UI dynamically using a key lookup.

/* --- 4. Dynamic Rendering Example --- */

function TabContent({ activeTab }: { activeTab: string }) {
  return <div>{componentMap[activeTab]}</div>;
}

// 🔍 This shows the right component based on which tab is active.

/* ✅ Summary of Learnings:

1. React `key`:
   - Used in lists for efficient updates.
   - Prevents bugs when items change.
   - Always use stable identifiers (not index).

2. useState Hook:
   - Tracks which tab is selected.
   - Enables tab switching via UI interaction.

3. Component Map:
   - Matches tab key to the right UI section.
   - Simplifies conditional rendering.

4. Combined:
   - Tabs are rendered with `.map()` using keys.
   - `activeTab` controls which component is shown using `componentMap`.

*/

/* 🧠 Related Concepts to Learn:

- React useState
- React keys and reconciliation
- JSX and ReactNode types
- TypeScript Record type
- Conditional rendering
- React component composition
- Virtual DOM diffing

*/
