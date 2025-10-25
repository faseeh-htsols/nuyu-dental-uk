interface IGeneral_Tabs_Buttons {
  href: string;
  content: string;
}
export interface IGeneral_Tabs {
  name: string;
  icon: string;
  imgSrc: string;
  copy: string;
  list: string[];
  buttons: IGeneral_Tabs_Buttons[];
}
interface IAccordion {
  question: string;
  answer: string;
  lists?: string[];
  btn?: string;
  href?: string;
  botPara?: string;
}
interface ITabs_Faq {
  name: string;
  image: string;
  accordion: IAccordion[];
}
export interface IFaq_Tabs {
  heading: string;
  tabs: ITabs_Faq[];
}
type NavLink = {
  name: string;
  link: string;
};

type SubItem = {
  title: string; // Title for mega dropdown sections
  link?: string;
  navLinks: NavLink[]; // Links within a section
};

type SimpleSubItem = {
  name: string; // Name of a simple dropdown link
  link: string; // Link for the dropdown item
};

// Define the union type for a navigation item
interface INavItemBase {
  name: string; // All navigation items must have a name
  link?: string; // Optional for dropdowns
}

interface IMegaDropdownItem extends INavItemBase {
  dropdownType: "mega"; // Dropdown type (mega)
  link?: string;
  subItems: SubItem[]; // Mega dropdown sections
}

interface ISimpleDropdownItem extends INavItemBase {
  dropdownType: "simple"; // Dropdown type (simple)
  link?: string;
  subItems: SimpleSubItem[]; // Simple dropdown links
}

interface IRegularNavItem extends INavItemBase {
  link: string; // Regular navigation items must have a link
  dropdownType?: undefined; // No dropdown type
}

// Union of all navigation item types
export type INavItem =
  | IMegaDropdownItem
  | ISimpleDropdownItem
  | IRegularNavItem;

interface gridItems {
  text: string;
  image: string;
}
export interface ILookAfter {
  id?: string;
  heading: string;
  para: string;
  btnContent?: string;
  btnLink?: string;
  gridData: gridItems[];
  texture?: boolean;
}
interface IbeforeAfterImages {
  before: string;
  after: string;
  name?: string;
}
export interface IImagesCarousel {
  heading: string;
  para?: string;
  images: IbeforeAfterImages[];
  buttonText?: string;
  buttonHref?: string;
  texture?: boolean;
}
interface IBoxesTreatmentJourney {
  heading: string;
  subHeading?: string;
  para?: string;
  image: string;
  reverse: boolean;
  list?: string[];
}
interface IBoxesPracticeGallery {
  image: string;
  reverse: boolean;
}
export interface ITreatmentJourney {
  heading: string;
  texture?: boolean;
  season?: boolean;
  para?: string;
  boxes: IBoxesTreatmentJourney[];
  buttons?: { name: string; href: string }[];
}
export interface IPracticeGallery {
  heading: string;
  texture?: boolean;
  boxes: IBoxesPracticeGallery[];
}
export interface IFooterHero {
  data: {
    title: string;
    bgImg: string;
    tagline?: string;
    des?: string;
  };
}
export interface ITeamMember {
  name: string;
  designation: string;
  gdc?: string;
  nmc?: string;
  image: string;
  bioImage: string;
  imageHover: string;
  paras: string[];
  buttons?: { name: string; link: string }[];
}
export interface ISingleTeamMember {
  heading: string;
  name: string;
  designation: string;
  gdc?: string;
  nmc?: string;
  image: string;
  bioImage: string;
  imageHover: string;
  paras: string[];
  buttons?: { name: string; link: string }[];
}
export interface IFullMembers {
  heading: string;
  para?: string;
  members: ITeamMember[];
}
export interface ITopThreeCardsTreatment {
  title: string;
  btnText: string;
  btnHref: string;
}
export interface IWhatIsAndKeyPoints {
  heading: string;
  para: string;
  subHeading: string;
  points: string[];
  imageSrc: string;
  reverse?: boolean;
}
export interface ITreatmentWorks {
  heading: string;
  para?: string;
  lists?: string[];
  image: string;
  logoImageRemoval?: boolean;
  texture?: boolean;
}
export interface ITreatmentWithDoctor {
  heading: string;
  para: string;
  drName: string;
  designation: string;
  image: string;
}
export interface ITreatmentTips {
  heading: string;
  para?: string;
  lists?: string[];
  botPara?: string;
  image: string;
  reverse?: boolean;
  buttons?: { name: string; href: string }[];
  texture?: boolean;
}
export interface IGoodCandidate {
  heading: string;
  para: string;
  image: string;
  reverse?: boolean;
  buttons?: { name: string; href: string }[];
  flowerRemove?: boolean;
  texture?: boolean;
}
export interface IFaqs {
  heading: string;
  texture?: boolean;
  accordion: IAccordion[];
}
export interface ITeamSection {
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonLink: string;
  hoverImage: string;
  defaultImage: string;
}
export interface IAppointmentSectionData {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
  paddingBottom?: boolean;
  para?: string;
  lists?: string[];
}
interface IFeeEntityBase {
  title: string;
  para?: string;
  costPara?: string;
  cost?: string;
  subTable?: IFeeEntityBase[];
}

interface IFeeTableEntity {
  heading: string;
  subHeading?: string;
  table: IFeeEntityBase[];
}
export interface IFeeSingleBox {
  name: string;
  imageSrc: string;
  tabsContent: IFeeTableEntity[];
}
export interface IFeesMain {
  heading: string;
  para: string;
  tabs: IFeeSingleBox[];
}

export interface IOfferSction {
  heading: string;
  para: string;
  btn: string;
  href: string;
  image: string;
  reverse?: boolean;
}
