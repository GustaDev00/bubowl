export interface HeroProps {
  content: {
    text: JSX.Element;
    title: JSX.Element;
    description: JSX.Element;
    button: {
      title: string;
      href: string;
    };
  };
  globe: {
    active: boolean;
    list?: {
      title: string;
      description: string;
    }[];
  };
}
