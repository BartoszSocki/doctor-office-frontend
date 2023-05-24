interface IPageableLinks {
  first?: ILink;
  next?: ILink;
  prev?: ILink;
  last?: ILink;
}

interface ILink {
  href: string;
}

export default IPageableLinks;
